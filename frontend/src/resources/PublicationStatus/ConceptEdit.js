import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from "@semapps/archipelago-layout";
import ConceptTitle from './ConceptTitle';

export const ConceptEdit = props => (
  <Edit title={<ConceptTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ConceptEdit;
