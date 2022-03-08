import React from 'react';
import { Edit, Column, ColumnShowLayout } from "@semapps/archipelago-layout";
import { ReferenceArrayInput,ReferenceInput} from '@semapps/semantic-data-provider';
// import { SimpleForm, TextInput ,UrlField} from "ra-ui-materialui";
import { SimpleForm, TextInput ,UrlField,Toolbar, SaveButton} from 'react-admin';
import OrganizationTitle from './OrganizationTitle';
import { MarkdownInput } from '@semapps/markdown-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import  PairLocationInput from '../../components/PairLocationInput';
import ToolBarCustom from '../../components/ToolBarCustom'

import {
  SelectInput,
  AutocompleteInput,
  useEditController,
  TextField,
  AutocompleteArrayInput,
  BooleanInput
} from 'react-admin';


export const OrganizationEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const lock = record?.['aurba:externalSource']!=undefined;
  const deleteable = !lock || record?.['aurba:externalDeleted']!=undefined;
  console.log('record',deleteable,record);
  return (
    <Edit title={<OrganizationTitle />} {...props} >
        <SimpleForm redirect="show" toolbar={<ToolBarCustom deleteable={deleteable}/>}>

            <TextInput source="pair:label" fullWidth disabled={lock} />

            <MarkdownInput multiline source="pair:description" fullWidth readOnly={lock}/>
            <PairLocationInput label="Adresse" source="pair:hasLocation" fullWidth disabled={lock}/>
            <TextInput source="pair:hasLocation.pair:longitude" fullWidth disabled={true} />
            <TextInput source="pair:hasLocation.pair:latitude" fullWidth disabled={true} />
            <TextInput source="aurba:perimeter" fullWidth/>
            <TextInput source="aurba:externalUrl" fullWidth disabled={lock}/>
            <ReferenceArrayInput reference="Branch" fullWidth source="pair:hasBranch">
              <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1} disabled={lock} disableRemove={lock}/>
            </ReferenceArrayInput>
            <ReferenceArrayInput reference="Branch" fullWidth source="aurba:hasSecondaryBranch">
              <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1}/>
            </ReferenceArrayInput>
            <ReferenceArrayInput reference="OperationalMode" fullWidth source="aurba:hasOperationalModes">
              <AutocompleteArrayInput optionText="pair:label" shouldRenderSuggestions={value => value.length > 1}/>
            </ReferenceArrayInput>
            <ReferenceInput reference="Group" fullWidth source="pair:partOf">
              <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1} />
            </ReferenceInput>
            <ReferenceInput reference="DataSource" fullWidth source="aurba:hasDataSource">
              <SelectInput optionText="pair:label" disabled={lock}/>
            </ReferenceInput>
            {lock &&
              <BooleanInput source="aurba:externalDeleted" disabled={true} />
            }

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
