const path = require('path');
const { JsonLdService } = require('@semapps/jsonld');

module.exports = {
  mixins: [JsonLdService],
  settings: {
    baseUri: process.env.SEMAPPS_HOME_URL,
    localContextFiles: [
      {
        path: '/context.json',
        file: path.resolve(__dirname, '../public/context.json')
      }
    ]
  }
};
