import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import {
  TextInput,
  List
} from 'react-admin';
const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];
const OrganizationList = props => (
    <List  {...props} filters={filters}>
        <SimpleList primaryText={record => record['pair:label']} linkType="show" />
    </List>
)

export default OrganizationList;
