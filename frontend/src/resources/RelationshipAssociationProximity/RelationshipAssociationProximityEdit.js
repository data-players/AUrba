import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput,BooleanInput ,useEditController} from "react-admin";
import RelationshipAssociationProximityTitle from './RelationshipAssociationProximityTitle';
import MarkdownInput from '../../markdown/MarkdownInput';
import ToolBarCustom from '../../components/ToolBarCustom'

export const RelationshipAssociationProximityEdit = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useEditController(props);
  const lock = record?.['aurba:deleteEdit'];
  return (
      <Edit title={<RelationshipAssociationProximityTitle />} {...props} >
          <SimpleForm redirect="show" toolbar={<ToolBarCustom deleteable={!lock}/>}>
              <TextInput source="pair:label" fullWidth />
              <MarkdownInput multiline source="pair:description" fullWidth />
              <BooleanInput source="aurba:deleteEdit" fullWidth />
          </SimpleForm>
      </Edit>
  )
}

export default RelationshipAssociationProximityEdit;
