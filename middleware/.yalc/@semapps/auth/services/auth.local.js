const { Strategy } = require('passport-local');
const AuthMixin = require('../mixins/auth');
const sendToken = require('../middlewares/sendToken');
const { MoleculerError } = require('moleculer').Errors;

const AuthLocalService = {
  name: 'auth',
  mixins: [AuthMixin],
  settings: {
    baseUrl: null,
    jwtPath: null,
    registrationAllowed: true,
    reservedUsernames: [],
    webIdSelection: []
  },
  created() {
    this.passportId = 'local';
  },
  actions: {
    async signup(ctx) {
      const { username, email, password, ...otherData } = ctx.params;

      let accountData = await ctx.call('auth.account.create', { username, email, password });

      const profileData = { nick: username, email, ...otherData };
      const webId = await ctx.call('webid.create', this.pickWebIdData(profileData));

      // Link the webId with the account
      accountData = await ctx.call('auth.account.attachWebId', { accountUri: accountData['@id'], webId });

      ctx.emit('auth.registered', { webId, profileData, accountData }, { meta: { webId: null, dataset: null } });

      const token = await ctx.call('auth.jwt.generateToken', { payload: { webId } });

      return { token, webId, newUser: true };
    },
    async login(ctx) {
      const { username, password } = ctx.params;

      const accountData = await ctx.call('auth.account.verify', { username, password });

      ctx.emit('auth.connected', { webId: accountData.webId, accountData }, { meta: { webId: null, dataset: null } });

      const token = await ctx.call('auth.jwt.generateToken', { payload: { webId: accountData.webId } });

      return { token, webId: accountData.webId, newUser: true };
    }
  },
  methods: {
    getStrategy() {
      return new Strategy(
        {
          usernameField: 'username',
          passwordField: 'password',
          passReqToCallback: true // We want to have access to req below
        },
        (req, username, password, done) => {
          req.$ctx
            .call('auth.login', { username, password })
            .then(returnedData => {
              done(null, returnedData);
            })
            .catch(e => {
              console.error(e);
              done(new MoleculerError(e.message, 401), false);
            });
        }
      );
    },
    getApiRoutes() {
      const loginRoute = {
        path: '/auth/login',
        use: [this.passport.initialize()],
        aliases: {
          'POST /': [this.passport.authenticate(this.passportId, { session: false }), sendToken]
        }
      };

      const signupRoute = {
        path: '/auth/signup',
        aliases: {
          'POST /': 'auth.signup'
        }
      };

      if (this.settings.registrationAllowed) {
        return [loginRoute, signupRoute];
      } else {
        return [loginRoute];
      }
    }
  }
};

module.exports = AuthLocalService;
