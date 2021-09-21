import RelationshipAssociationCreate from './RelationshipAssociationCreate';
import RelationshipAssociationEdit from './RelationshipAssociationEdit';
import RelationshipAssociationList from './RelationshipAssociationList';
import RelationshipAssociationShow from './RelationshipAssociationShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: RelationshipAssociationList,
        show: RelationshipAssociationShow,
        create: RelationshipAssociationCreate,
        edit: RelationshipAssociationEdit,
        icon: HomeIcon,
        options: {
          label: 'RelationshipAssociation'
        },
    },
    dataModel: {
        types: ['aurba:RelationshipAssociation'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'relationship-associations',
        slugField: 'pair:label',
        dereference: ['aurba:relationshipOrganizationFrom','aurba:relationshipOrganizationTo','aurba:relationshipAssociationProximityType'],
      },
      translations: {
        fr: {
          name: 'Liens |||| Les liens',
          fields: {
            'pair:label': 'Titre',
            'pair:description': 'Contenu',
            'aurba:RelationshipAssociationOfRelationshipFrom' : 'relations',
            'aurba:relationshipRelationshipAssociationTo' : 'orga'
          }
        }
      }
};
