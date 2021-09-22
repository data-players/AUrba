import React from 'react';
import { Edit } from "@semapps/archipelago-layout";
import { SimpleForm, TextInput } from "ra-ui-materialui";
import RelationshipAssociationKindTitle from './RelationshipAssociationKindTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const RelationshipAssociationKindEdit = props => (
    <Edit title={<RelationshipAssociationKindTitle />} {...props} >
        <SimpleForm redirect="show" >
            <TextInput source="pair:label" fullWidth />
            <MarkdownInput multiline source="pair:description" fullWidth />
        </SimpleForm>
    </Edit>
)

export default RelationshipAssociationKindEdit;
