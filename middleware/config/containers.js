const { ACTOR_TYPES } = require("@semapps/activitypub");

module.exports = [
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['pair:hasLocation/pair:hasPostalAddress']
  },
  {
    path: '/groups',
    acceptedTypes: ['pair:Group'],
  },
  {
    path: '/relationship-associations',
    acceptedTypes: ['aurba:RelationshipAssociation'],
  },
  {
    path: '/RelationshipAssociationProximities',
    acceptedTypes: 'aurba:RelationshipAssociationProximity'
  },
  {
    path: '/RelationshipAssociationKinds',
    acceptedTypes: 'aurba:RelationshipAssociationKind'
  },
  {
    path: '/branches',
    acceptedTypes: ['pair:branches'],
  },
  {
    path: '/operationalModes',
    acceptedTypes: ['aurba:OperationalMode'],
  },
  {
    path: '/groupe-types',
    acceptedTypes: ['pair:GroupType'],
  },
  {
    path: '/data-sources',
    acceptedTypes: ['aurba:DataSource'],
  },
  {
    path: '/publication-status',
    acceptedTypes: ['aurba:PublicationStatus'],
  },
  {
    path: '/pages',
    acceptedTypes: ['semapps:Page'],
    preferredView: '/Page',
  },
  '/files',
  {
    path: '/bots',
    acceptedTypes: [ACTOR_TYPES.APPLICATION],
    dereference: ['sec:publicKey'],
    excludeFromMirror: true
  },
  {
    path: '/users',
    preferredView: '/Person',
    acceptedTypes: ['pair:Person'],
    dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress']
  },
];
