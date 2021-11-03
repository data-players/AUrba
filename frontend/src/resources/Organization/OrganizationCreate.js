import React from 'react';
import { SimpleForm, TextInput,SelectInput,ReferenceInput } from 'react-admin';
import { } from '@semapps/semantic-data-provider';
import { Create } from '@semapps/archipelago-layout';

const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm initialValues={{"aurba:hasDataSource":"https://64617461.AUrba.data-players.com/data-sources/a-urba"}}>
      <TextInput source="pair:label" fullWidth />
      <ReferenceInput label="XXX" reference="DataSource" source="aurba:hasDataSource">
        <SelectInput optionText="pair:label"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default OrganizationCreate;
