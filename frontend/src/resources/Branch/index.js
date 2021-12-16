import BranchCreate from './BranchCreate';
import BranchEdit from './BranchEdit';
import BranchList from './BranchList';
import BranchShow from './BranchShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
    config: {
        list: BranchList,
        show: BranchShow,
        create: BranchCreate,
        edit: BranchEdit,
        icon: LocalOfferIcon,
        options: {
          label: 'Branch'
        },
    },
    dataModel: {
        types: ['pair:Branch'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'branches',
        slugField: 'pair:label'
      },
      translations: {
        fr: {
          name: 'Thématique |||| Les thématiques',
          fields: {
            'pair:label': 'Titre',
            'aurba:deleteEdit' : `Bloquer la suppression`
          }
        }
      }
};
