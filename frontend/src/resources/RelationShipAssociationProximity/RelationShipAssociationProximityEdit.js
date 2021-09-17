import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import RelationShipAssociationProximityTitle from './RelationShipAssociationProximityTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const RelationShipAssociationProximityEdit = props => (
    <Edit title={<RelationShipAssociationProximityTitle />} {...props} >
        <SimpleForm redirect="show" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
        </SimpleForm>
    </Edit>
)

export default RelationShipAssociationProximityEdit;
