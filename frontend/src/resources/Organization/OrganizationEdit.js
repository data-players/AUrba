import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const OrganizationEdit = props => (
    <Edit title={<OrganizationTitle />} {...props} >
        <SimpleForm redirect="show" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
            <ReificationArrayInput source="aurba:organizationOfRelationshipFrom" reificationClass="aurba:RelationshipAssociation">

                <ReferenceInput reference="Organization" source="aurba:relationshipOrganizationTo">
                  <SelectInput optionText="pair:label" />
                </ReferenceInput>

                <ReferenceInput reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
                  <SelectInput optionText="pair:label" />
                </ReferenceInput>
            </ReificationArrayInput>
        </SimpleForm>
    </Edit>
)

export default OrganizationEdit;
