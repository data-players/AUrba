import React from 'react';
import { ReferenceField } from "@semapps/semantic-data-provider";
import {
  TextInput,
  List,
  Datagrid,
  ReferenceInput,
  TextField,
  EditButton,
  SelectInput,
  ShowButton
} from 'react-admin';
const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
    <ReferenceInput reference="DataSource" source="aurba:hasDataSource" alwaysOn>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
];
const OrganizationList = props => (
    <List  {...props} filters={filters}>
        <Datagrid>
            <TextField source="pair:label" />
            <TextField source="pair:description" />
            <ReferenceField reference="DataSource" source="aurba:hasDataSource">
              <TextField source="pair:label" />
            </ReferenceField>
            <ShowButton />
        </Datagrid>
    </List>
)

export default OrganizationList;
