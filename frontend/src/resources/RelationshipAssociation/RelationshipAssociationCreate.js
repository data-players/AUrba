import React from 'react';
import {   ReferenceInput, SelectInput,SimpleForm, TextInput,AutocompleteInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const RelationshipAssociationCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show" >
      <ReferenceInput reference="Agent" source="aurba:relationshipOrganizationFrom" fullWidth>
        <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
      </ReferenceInput>
      <ReferenceInput  reference="Agent" source="aurba:relationshipOrganizationTo" fullWidth>
        <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
      </ReferenceInput>
      <TextInput source="aurba:object" fullWidth/>
      <ReferenceInput  reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType" fullWidth>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ReferenceInput  reference="RelationshipAssociationKind" source="aurba:relationshipAssociationKindType" fullWidth>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default RelationshipAssociationCreate;
