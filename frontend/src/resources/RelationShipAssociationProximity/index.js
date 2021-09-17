import RelationShipAssociationProximityCreate from './RelationShipAssociationProximityCreate';
import RelationShipAssociationProximityEdit from './RelationShipAssociationProximityEdit';
import RelationShipAssociationProximityList from './RelationShipAssociationProximityList';
import RelationShipAssociationProximityShow from './RelationShipAssociationProximityShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: RelationShipAssociationProximityList,
        show: RelationShipAssociationProximityShow,
        create: RelationShipAssociationProximityCreate,
        edit: RelationShipAssociationProximityEdit,
        icon: HomeIcon,
        options: {
          label: 'RelationShipAssociationProximity'
        },
    },
    dataModel: {
        types: ['pair:RelationShipAssociationProximity'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'RelationShipAssociationProximities',
        slugField: 'pair:label'
      },
      translations: {
        fr: {
          name: 'Organisation |||| Les organisations',
          fields: {
            'pair:label': 'Titre',
            'pair:description': 'Contenu',
          }
        }
      }
};
