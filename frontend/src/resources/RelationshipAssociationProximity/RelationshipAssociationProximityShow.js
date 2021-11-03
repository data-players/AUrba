import React from 'react';
import { Show,MainList } from "@semapps/archipelago-layout";
import RelationshipAssociationProximityTitle from "./RelationshipAssociationProximityTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const RelationshipAssociationProximityShow = props => (
    <Show title={<RelationshipAssociationProximityTitle />} {...props}>
      <MainList>
        <TextField source="pair:label"></TextField>
        <MarkdownField source="pair:description" />
      </MainList>
    </Show>
);

export default RelationshipAssociationProximityShow;
