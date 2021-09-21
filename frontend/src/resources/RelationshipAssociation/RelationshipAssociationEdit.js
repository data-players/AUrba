import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import RelationshipAssociationTitle from './RelationshipAssociationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const RelationshipAssociationEdit = props => (
    <Edit title={<RelationshipAssociationTitle />} {...props} >
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
    </Edit>
)

export default RelationshipAssociationEdit;
