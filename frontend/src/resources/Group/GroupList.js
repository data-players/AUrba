import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import {
  TextInput,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ShowButton
} from 'react-admin';
const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
];
const GroupList = props => (
    <List  {...props} filters={filters} sort={{ field: 'pair:hasConceptType', order: 'ASC' }}>
      <Datagrid>
        <TextField source="pair:label" />
        <ReferenceField source="pair:hasConceptType" reference="GroupType" sortBy="pair:label">
            <TextField source="pair:label" />
        </ReferenceField>
        <ShowButton />
      </Datagrid>
    </List>
)

export default GroupList;
