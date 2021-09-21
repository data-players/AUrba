import React from 'react';
import {   ReferenceInput, SelectInput,SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const RelationshipAssociationCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show" >
      <ReferenceInput label="orga" reference="Organization" source="aurba:relationshipOrganizationFrom">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput label="orga" reference="Organization" source="aurba:relationshipOrganizationTo">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput label="Proximite" reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default RelationshipAssociationCreate;
