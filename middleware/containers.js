module.exports = [
  {
    path: '/organizations',
    acceptedTypes: ['pair:Organization'],
    dereference: ['aurba:organizationOfRelationshipFrom'],
    disassembly: [{ path: 'aurba:organizationOfRelationshipFrom', container:  process.env.SEMAPPS_HOME_URL + 'relationship-associations' }]
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
  }
];
