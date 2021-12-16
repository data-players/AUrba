import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm } from "ra-ui-materialui";
import BranchTitle from './BranchTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import TooBarSaveOnly from '../../components/ToolBarSaveOnly'
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextInput,
  BooleanInput,
  useEditController
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const BranchEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const lock = record?.['aurba:deleteEdit'];
  return (
      <Edit title={<BranchTitle />} {...props} >
        <SimpleForm redirect="show" toolbar={lock?<TooBarSaveOnly/>:undefined}>
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
            <BooleanInput source="aurba:deleteEdit" fullWidth />
        </SimpleForm>
      </Edit>
  )

}

export default BranchEdit;
