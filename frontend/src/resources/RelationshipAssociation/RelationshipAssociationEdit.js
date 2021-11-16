import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm } from "ra-ui-materialui";
import RelationshipAssociationTitle from './RelationshipAssociationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextInput
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const RelationshipAssociationEdit = props => (
    <Edit title={<RelationshipAssociationTitle />} {...props} >
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
    </Edit>
)

export default RelationshipAssociationEdit;
