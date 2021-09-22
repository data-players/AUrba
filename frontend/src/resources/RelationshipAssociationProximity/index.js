import RelationshipAssociationProximityCreate from './RelationshipAssociationProximityCreate';
import RelationshipAssociationProximityEdit from './RelationshipAssociationProximityEdit';
import RelationshipAssociationProximityList from './RelationshipAssociationProximityList';
import RelationshipAssociationProximityShow from './RelationshipAssociationProximityShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: RelationshipAssociationProximityList,
        show: RelationshipAssociationProximityShow,
        create: RelationshipAssociationProximityCreate,
        edit: RelationshipAssociationProximityEdit,
        icon: HomeIcon,
        options: {
          label: 'RelationshipAssociationProximity'
        },
    },
    dataModel: {
        types: ['aurba:RelationshipAssociationProximity'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'RelationshipAssociationProximities',
        slugField: 'pair:label',
      },
      translations: {
        fr: {
          name: 'Proximité |||| Les proxomités de lien',
          fields: {
            'pair:label': 'Titre',
            'pair:description': 'Contenu',
          }
        }
      }
};
