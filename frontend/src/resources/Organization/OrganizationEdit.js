import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const OrganizationEdit = props => (
    <Edit title={<OrganizationTitle />} {...props} >
        <SimpleForm redirect="show" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
            <ReificationArrayInput source="pair:organizationOfRelationshipFrom" reificationClass="pair:RelationshipAssociation">
              <ReferenceInput reference="Organization" source="pair:relationshipOrganizationTo">
                <AutocompleteInput
                  optionText={record => record && `${record['pair:label']}`}
                />
              </ReferenceInput>
              <ReferenceInput label="Proximite" reference="RelationShipAssociationProximity" source="pair:relationshipAssociationProximityType">
                <SelectInput optionText="pair:label" />
              </ReferenceInput>
            </ReificationArrayInput>
        </SimpleForm>
    </Edit>
)

export default OrganizationEdit;
