const path = require('path');
const urlJoin = require("url-join");
const { CoreService } = require('@semapps/core');
const CONFIG = require('../config/config');
const containers = require('../config/containers');
const ApiGatewayService = require('moleculer-web');

console.log('CONFIG',CONFIG)
console.log('CONTEXT PATH File_______________',path.resolve(__dirname, '../public/context.json'))
console.log('CONTEXT PATH Url_______________',urlJoin(process.env.SEMAPPS_HOME_URL, 'context.json'))

module.exports = {
  mixins: [CoreService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    baseDir: path.resolve(__dirname, '..'),
    triplestore: {
      url: CONFIG.SPARQL_ENDPOINT,
      user: CONFIG.JENA_USER,
      password: CONFIG.JENA_PASSWORD,
      mainDataset: CONFIG.MAIN_DATASET,
    },
    containers,
    api: {
      port: CONFIG.PORT,
      routes: [
        {
          path: '/ontology',
          use: [
            ApiGatewayService.serveStatic('./public/ontology.ttl', {
              setHeaders: res => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'text/turtle; charset=utf-8');
              }
            })
          ]
        },
        {
          path: '/context.json',
          use: [
            ApiGatewayService.serveStatic('./public/context.json', {
              setHeaders: res => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
              }
            })
          ]
        }
      ],
    },
    ldp: {
      preferredViewForResource: async (resourceUri, containerPreferredView) => {
        if (!containerPreferredView) return resourceUri;
        return urlJoin(CONFIG.FRONT_URL, containerPreferredView, encodeURIComponent(resourceUri), 'show')
      },
      remoteContextFiles: [
        {
          uri: urlJoin(process.env.SEMAPPS_HOME_URL, 'context.json'),
          file: path.resolve(__dirname, '../public/context.json')
        },
        {
          uri: 'https://www.w3.org/ns/activitystreams',
          file: path.resolve(__dirname, './config/context-as.json')
        }
      ]
    },
    void: {
      title: CONFIG.INSTANCE_NAME,
      description: CONFIG.INSTANCE_DESCRIPTION
    },
    webacl: false,
    webfinger : false,
    activitypub : false,
    jsonContext: urlJoin(process.env.SEMAPPS_HOME_URL, 'context.json')
  }
};
