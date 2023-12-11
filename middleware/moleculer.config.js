
// const cacher = process.env.SEMAPPS_REDIS_URL
//   ? {
//     type: 'Redis',
//     options: {
//       prefix: 'action',
//       ttl: 2592000, // Keep in cache for one month
//       redis: process.env.SEMAPPS_REDIS_URL
//     }
//   }
//   : undefined;


// console.log('CACHER',cacher);

// module.exports = {
//   cacher
// };


const CONFIG = require('./config/config');
const {CacherMiddleware } = require('@semapps/webacl');

// Use the cacher only if Redis is configured
const cacherConfig = CONFIG.REDIS_CACHE_URL
  ? {
      type: 'Redis',
      options: {
        prefix: 'action',
        ttl: 2592000, // Keep in cache for one month
        redis: CONFIG.REDIS_CACHE_URL
      }
    }
  : undefined;

console.log('cacherConfig',cacherConfig);

module.exports = {
  // You can set all ServiceBroker configurations here
  // See https://moleculer.services/docs/0.14/configuration.html
  middlewares: [
    CacherMiddleware(cacherConfig), // Set the cacher before the WebAcl middleware
  ]
};
