import React from 'react';
import { Edit, Column, ColumnShowLayout } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput ,UrlField} from "ra-ui-materialui";
import GroupTitle from './GroupTitle';
import { MarkdownInput } from '@semapps/markdown-components';

import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  useShowController,
  TextField,
  ImageInput
} from 'react-admin';
import {ReificationArrayInput,ImageField} from '@semapps/semantic-data-provider';

export const GroupEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useShowController(props);
  const lock = record?.['aurba:externalSource']!=undefined;
  return (
    <Edit title={<GroupTitle />} {...props} >
        <SimpleForm redirect="show" >

            <TextInput source="pair:label" fullWidth disabled={lock} />

            <MarkdownInput multiline source="pair:description" fullWidth readOnly={lock}/>
            <ReferenceInput reference="GroupType" fullWidth source="pair:hasConceptType">
              <SelectInput optionText="pair:label"/>
            </ReferenceInput>

            <ReferenceInput reference="Group"  fullWidth source="pair:partOf">
              <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}  allowEmpty={true} resettable={true}/>
            </ReferenceInput>

            <TextInput source="urba:color" fullWidth/>
            <ImageInput source="aurba:image" label="image" accept="image/*">
              <ImageField source="src"/>
            </ImageInput>

        </SimpleForm>
    </Edit>
  )
}

export default GroupEdit;
