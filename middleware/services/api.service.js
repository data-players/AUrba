const ApiGatewayService = require('moleculer-web');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    routes: [
      {
        path: '/ontology.owl',
        use: [
          ApiGatewayService.serveStatic('./public/ontology.owl', {
            setHeaders: res => {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Content-Type', 'application/rdf+xml; charset=utf-8');
            }
          })
        ]
      }
    ],
    cors: {
      origin: '*',
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
      exposedHeaders: '*'
    }
  }
};
