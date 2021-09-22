import React from 'react';
import {   ReferenceInput, SelectInput,SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const RelationshipAssociationCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show" >
      <ReferenceInput reference="Organization" source="aurba:relationshipOrganizationFrom">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput  reference="Organization" source="aurba:relationshipOrganizationTo">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput  reference="RelationshipAssociationKind" source="aurba:relationshipAssociationKindType">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default RelationshipAssociationCreate;
