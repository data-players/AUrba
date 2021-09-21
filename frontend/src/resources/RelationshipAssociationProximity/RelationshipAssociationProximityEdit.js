import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import RelationshipAssociationProximityTitle from './RelationshipAssociationProximityTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const RelationshipAssociationProximityEdit = props => (
    <Edit title={<RelationshipAssociationProximityTitle />} {...props} >
        <SimpleForm redirect="show" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
        </SimpleForm>
    </Edit>
)

export default RelationshipAssociationProximityEdit;
