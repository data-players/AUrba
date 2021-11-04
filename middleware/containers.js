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
    path: '/groupe-types',
    acceptedTypes: ['pair:GroupType'],
  },
  {
    path: '/data-sources',
    acceptedTypes: ['aurba:DataSource'],
  }
];
