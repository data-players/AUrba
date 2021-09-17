import React from 'react';
import { Show } from "@semapps/archipelago-layout";
import RelationShipAssociationProximityTitle from "./RelationShipAssociationProximityTitle";
import MarkdownField from "../../markdown/MarkdownField";

const RelationShipAssociationProximityShow = props => (
    <Show title={<RelationShipAssociationProximityTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default RelationShipAssociationProximityShow;