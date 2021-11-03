import GroupTypeCreate from './GroupTypeCreate';
import GroupTypeEdit from './GroupTypeEdit';
import GroupTypeList from './GroupTypeList';
import GroupTypeShow from './GroupTypeShow';
import BuildIcon from '@material-ui/icons/Build';

export default {
    config: {
        list: GroupTypeList,
        show: GroupTypeShow,
        create: GroupTypeCreate,
        edit: GroupTypeEdit,
        icon: BuildIcon,
        options: {
          label: 'GroupType'
        },
    },
    dataModel: {
        types: ['pair:GroupType'],
        containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'groupe-types',
        slugField: 'pair:label',
        dereference: ['aurba:relationshipOrganizationFrom','aurba:relationshipOrganizationTo','aurba:GroupTypeProximityType'],
      },
      translations: {
        fr: {
          name: 'Type de groupe |||| Les Types de Groupe',
          fields: {
            'pair:label': 'Titre',
          }
        }
      }
};
