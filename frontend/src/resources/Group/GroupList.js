import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import {
  TextInput,
  List
} from 'react-admin';
const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
];
const GroupList = props => (
    <List  {...props} filters={filters}>
        <SimpleList primaryText={record => record['pair:label']} linkType="show" />
    </List>
)

export default GroupList;
