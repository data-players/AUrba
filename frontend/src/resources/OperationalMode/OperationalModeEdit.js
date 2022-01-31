import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm } from "ra-ui-materialui";
import OperationalModeTitle from './OperationalModeTitle';
import MarkdownInput from '../../markdown/MarkdownInput'
import MarkdownField from "../../markdown/MarkdownField";
import ToolBarCustom from '../../components/ToolBarCustom'
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextInput,
  BooleanInput,
  useEditController
} from 'react-admin';
import {ReificationArrayInput} from '@semapps/semantic-data-provider';

export const OperationalModeEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const lock = record?.['aurba:deleteEdit'];
  return (
      <Edit title={<OperationalModeTitle />} {...props} >
        <SimpleForm redirect="show" toolbar={<ToolBarCustom deleteable={!lock}/>}>
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
            <BooleanInput source="aurba:deleteEdit" fullWidth />
        </SimpleForm>
      </Edit>
  )

}

export default OperationalModeEdit;
