import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm } from "ra-ui-materialui";
import GroupTypeTitle from './GroupTypeTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextInput,
  ImageInput
} from 'react-admin';
import {ImageField} from '@semapps/semantic-data-provider';

export const GroupTypeEdit = props => (
    <Edit title={<GroupTypeTitle />} {...props} >
      <SimpleForm redirect="show" >
          <TextInput source="pair:label" fullWidth />
          <MarkdownInput multiline source="pair:description" fullWidth />
          <ImageInput source="aurba:image" label="image" accept="image/*">
            <ImageField source="src"/>
          </ImageInput>
      </SimpleForm>
    </Edit>
)

export default GroupTypeEdit;
