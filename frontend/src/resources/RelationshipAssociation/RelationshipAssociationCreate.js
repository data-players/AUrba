import React from 'react';
import {   ReferenceInput, SelectInput,SimpleForm, TextInput,AutocompleteInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const RelationshipAssociationCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show" >
      <ReferenceInput reference="Agent" source="aurba:relationshipOrganizationFrom">
        <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
      </ReferenceInput>
      <ReferenceInput  reference="Agent" source="aurba:relationshipOrganizationTo">
        <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
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
