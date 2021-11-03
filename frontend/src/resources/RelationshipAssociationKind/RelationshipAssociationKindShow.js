import React from 'react';
import { Show,MainList } from "@semapps/archipelago-layout";
import RelationshipAssociationKindTitle from "./RelationshipAssociationKindTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const RelationshipAssociationKindShow = props => (
    <Show title={<RelationshipAssociationKindTitle />} {...props}>
      <MainList>
        <TextField source="pair:label"></TextField>
        <MarkdownField source="pair:description" />
      </MainList>
    </Show>
);

export default RelationshipAssociationKindShow;
