import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import {
  TextInput,
  List,
  Datagrid,
  TextField,
  ShowButton,
  ReferenceInput,
  SelectInput
} from 'react-admin';
const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
    <ReferenceInput  reference="GroupType" source="pair:hasConceptType" alwaysOn>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>,
];
const GroupList = props => (
    <List  {...props} filters={filters} sort={{ field: 'pair:hasConceptType', order: 'ASC' }}  perPage="50">
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
