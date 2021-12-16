import OperationalModeCreate from './OperationalModeCreate';
import OperationalModeEdit from './OperationalModeEdit';
import OperationalModeList from './OperationalModeList';
import OperationalModeShow from './OperationalModeShow';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export default {
    config: {
        list: OperationalModeList,
        show: OperationalModeShow,
        create: OperationalModeCreate,
        edit: OperationalModeEdit,
        icon: LocalOfferIcon,
        options: {
          label: 'OperationalMode'
        },
    },
    dataModel: {
        types: ['pair:OperationalMode'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'OperationalModes',
        slugField: 'pair:label'
      },
      translations: {
        fr: {
          name: `Mode d'action |||| Les modes d'actions`,
          fields: {
            'pair:label': 'Titre',
            'aurba:deleteEdit' : `Bloquer la suppression`
          }
        }
      }
};
