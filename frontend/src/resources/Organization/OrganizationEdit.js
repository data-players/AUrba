import React from 'react';
import { Edit, Column, ColumnShowLayout } from "@semapps/archipelago-layout";
import { ReferenceArrayInput,ReferenceInput} from '@semapps/semantic-data-provider';
import { SimpleForm, TextInput ,UrlField} from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import { MarkdownInput } from '@semapps/markdown-components';

import {
  SelectInput,
  AutocompleteInput,
  useShowController,
  TextField,
  AutocompleteArrayInput
} from 'react-admin';

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
            <ReferenceArrayInput reference="Branch" source="pair:hasBranch">
              <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} />
            </ReferenceArrayInput>
            <ReferenceInput reference="Group" source="pair:partOf">
              <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
            </ReferenceInput>
            <ReferenceInput reference="DataSource" source="aurba:hasDataSource">
              <SelectInput optionText="pair:label" initialValue="https://64617461.AUrba.data-players.com/data-sources/a-urba"/>
            </ReferenceInput>

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
