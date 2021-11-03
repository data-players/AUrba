import OrganizationCreate from './OrganizationCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default {
    config: {
        list: OrganizationList,
        show: OrganizationShow,
        create: OrganizationCreate,
        edit: OrganizationEdit,
        icon: AccountBalanceIcon,
        options: {
          label: 'Organization'
        },
    },
    dataModel: {
        types: ['pair:Organization'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations',
        slugField: 'pair:label',
        forceArray: ['pair:organizationOfRelationshipFrom']
      },
      translations: {
        fr: {
          name: 'Organisation |||| Les organisations',
          fields: {
            'pair:label': 'Titre',
            'pair:description': 'Contenu',
            'aurba:organizationOfRelationshipFrom' : 'relations',
            'aurba:relationshipOrganizationTo' : 'vers',
            'aurba:relationshipAssociationKindType' : 'nature',
            'aurba:relationshipAssociationProximityType' : 'proximite',
            'aurba:externalUrl' : 'url externe',
            'pair:hasBranch' : 'thématiques',
            'pair:partOf' : 'groupe'
          }
        }
      }
};
