import RelationshipAssociationKindCreate from './RelationshipAssociationKindCreate';
import RelationshipAssociationKindEdit from './RelationshipAssociationKindEdit';
import RelationshipAssociationKindList from './RelationshipAssociationKindList';
import RelationshipAssociationKindShow from './RelationshipAssociationKindShow';
import BuildIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: RelationshipAssociationKindList,
        show: RelationshipAssociationKindShow,
        create: RelationshipAssociationKindCreate,
        edit: RelationshipAssociationKindEdit,
        icon: BuildIcon,
        options: {
          label: 'RelationshipAssociationKind'
        },
    },
    dataModel: {
        types: ['aurba:RelationshipAssociationKind'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'RelationshipAssociationProximities',
        slugField: 'pair:label',
      },
      translations: {
        fr: {
          name: 'Nature |||| Les natures de lien',
          fields: {
            'pair:label': 'Titre',
            'pair:description': 'Contenu',
          }
        }
      }
};
