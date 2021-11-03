import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm } from "ra-ui-materialui";
import DataSourceTitle from './DataSourceTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextInput
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const DataSourceEdit = props => (
    <Edit title={<DataSourceTitle />} {...props} >
      <SimpleForm redirect="show" >
          <TextInput source="pair:label" fullWidth />
          <MarkdownInput multiline source="pair:description" fullWidth />
      </SimpleForm>
    </Edit>
)

export default DataSourceEdit;
