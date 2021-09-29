import React from 'react';
import { Edit, Column, ColumnShowLayout } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput ,UrlField} from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import { MarkdownInput } from '@semapps/markdown-components';

import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  useShowController,
  TextField
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const OrganizationEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useShowController(props);
  const lock = record?.['aurba:externalSource']!=undefined;
  return (
    <Edit title={<OrganizationTitle />} {...props} >
        <SimpleForm redirect="show" >

            <TextInput source="pair:label" fullWidth disabled={lock} />

            <MarkdownInput multiline source="pair:description" fullWidth readOnly={lock}/>

            <TextInput source="aurba:externalUrl" fullWidth disabled={lock}/>

            {/**
              <ReificationArrayInput source="aurba:organizationOfRelationshipFrom" reificationClass="aurba:RelationshipAssociation">

              <ReferenceInput reference="Organization" source="aurba:relationshipOrganizationTo">
                <SelectInput optionText="pair:label" />
              </ReferenceInput>


              <ReferenceInput reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
                <SelectInput optionText="pair:label" />
              </ReferenceInput>

          </ReificationArrayInput>
          **/}
        </SimpleForm>
    </Edit>
  )
}

export default OrganizationEdit;
