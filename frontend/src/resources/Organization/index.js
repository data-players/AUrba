import OrganizationCreate from './OrganizationCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: OrganizationList,
        show: OrganizationShow,
        create: OrganizationCreate,
        edit: OrganizationEdit,
        icon: HomeIcon,
        options: {
          label: 'Organization'
        },
    },
    dataModel: {
        types: ['pair:Organization'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations',
        slugField: 'pair:title'
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
