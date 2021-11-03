import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import {
  TextInput,
  List
} from 'react-admin';
const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
];
const OrganizationList = props => (
    <List  {...props} filters={filters}>
        <SimpleList primaryText={record => record['pair:label']} secondaryText={record => record['pair:description']} linkType="show" />
    </List>
)

export default OrganizationList;
