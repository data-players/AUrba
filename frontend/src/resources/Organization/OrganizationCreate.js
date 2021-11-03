import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <ReferenceInput reference="DataSource" source="aurba:hasDataSource">
        <SelectInput optionText="pair:label" initialValue="https://64617461.AUrba.data-players.com/data-sources/a-urba"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default OrganizationCreate;
