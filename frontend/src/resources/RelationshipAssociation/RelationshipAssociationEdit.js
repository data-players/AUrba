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
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const RelationshipAssociationEdit = props => (
    <Edit title={<RelationshipAssociationTitle />} {...props} >
        <SimpleForm redirect="show" >

          <ReferenceInput reference="Agent" source="aurba:relationshipOrganizationFrom">
            <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
          </ReferenceInput>
          <ReferenceInput  reference="Agent" source="aurba:relationshipOrganizationTo">
            <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
          </ReferenceInput>
          <ReferenceInput  reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
          <ReferenceInput  reference="RelationshipAssociationKind" source="aurba:relationshipAssociationKindType">
            <SelectInput optionText="pair:label" />
          </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export default RelationshipAssociationEdit;
