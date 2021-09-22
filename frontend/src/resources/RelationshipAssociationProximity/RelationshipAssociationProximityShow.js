import React from 'react';
import { Show } from "@semapps/archipelago-layout";
import RelationshipAssociationProximityTitle from "./RelationshipAssociationProximityTitle";
import MarkdownField from "../../markdown/MarkdownField";

const RelationshipAssociationProximityShow = props => (
    <Show title={<RelationshipAssociationProximityTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default RelationshipAssociationProximityShow;
