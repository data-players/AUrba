import React from 'react';
import { Show } from "@semapps/archipelago-layout";
import RelationshipAssociationTitle from "./RelationshipAssociationTitle";
import MarkdownField from "../../markdown/MarkdownField";

const RelationshipAssociationShow = props => (
    <Show title={<RelationshipAssociationTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default RelationshipAssociationShow;