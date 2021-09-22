import React from 'react';
import { Show } from "@semapps/archipelago-layout";
import RelationshipAssociationKindTitle from "./RelationshipAssociationKindTitle";
import MarkdownField from "../../markdown/MarkdownField";

const RelationshipAssociationKindShow = props => (
    <Show title={<RelationshipAssociationKindTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default RelationshipAssociationKindShow;