import React from 'react';
import { Edit, Column, ColumnShowLayout } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput ,UrlField} from "ra-ui-materialui";
import OrganizationTitle from './OrganizationTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import { If, Then, Else } from 'react-if';

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
  return (
    <Edit title={<OrganizationTitle />} {...props} >
        <SimpleForm redirect="show" >
            <If condition={record?.['aurba:externalSource']==undefined}>
              <Then>
                <TextInput source="pair:label" fullWidth />
              </Then>
              <Else>
                <TextField source="pair:label" fullWidth />
              </Else>
            </If>
            <If condition={record?.['aurba:externalSource']==undefined}>
              <Then>
                <MarkdownInput multiline source="pair:description" fullWidth />
              </Then>
              <Else>
                <MarkdownField source="pair:description" record={record} />
              </Else>
            </If>
            <If condition={record?.['aurba:externalSource']==undefined}>
              <Then>
                <TextInput source="aurba:externalUrl" fullWidth />
              </Then>
              <Else>
                <UrlField source="aurba:externalUrl" target="_blank" rel="noreferrer"/>
              </Else>
            </If>
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
