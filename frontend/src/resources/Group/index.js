import GroupCreate from './GroupCreate';
import GroupEdit from './GroupEdit';
import GroupList from './GroupList';
import GroupShow from './GroupShow';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default {
    config: {
        list: GroupList,
        show: GroupShow,
        create: GroupCreate,
        edit: GroupEdit,
        icon: AccountBalanceIcon,
        options: {
          label: 'Group'
        },
    },
    dataModel: {
      types: ['pair:Group'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'groups',
        slugField: 'pair:label',
        forceArray: ['pair:organizationOfRelationshipFrom','pair:hasPart']
    },
    translations: {
      fr: {
        name: 'Groupe |||| Les groupes',
        fields: {
          'pair:label': 'Titre',
          'pair:description': 'Contenu',
          'aurba:organizationOfRelationshipFrom' : 'relations',
          'aurba:relationshipOrganizationTo' : 'vers',
          'aurba:relationshipAssociationKindType' : 'nature',
          'aurba:relationshipAssociationProximityType' : 'proximite',
          'aurba:externalUrl' : 'url externe'
        }
      }
    }
};
