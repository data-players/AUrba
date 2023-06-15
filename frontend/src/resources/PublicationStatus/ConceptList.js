import React from 'react';
// import List from "../../layout/list/List";
// import SimpleList from "../../commons/list/SimpleList";
import StyleIcon from '@material-ui/icons/Style';

import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextField,
  Datagrid,
  TextInput,
  SimpleList,
  List,
  EditButton,
  ShowButton
} from 'react-admin';

const ConceptList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <StyleIcon />}
    />
  </List>
);

export default ConceptList;
