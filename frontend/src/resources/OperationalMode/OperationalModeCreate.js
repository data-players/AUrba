import React from 'react';
import {   ReferenceInput, SelectInput,SimpleForm, TextInput,AutocompleteInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const OperationalModeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Create>
);

export default OperationalModeCreate;
