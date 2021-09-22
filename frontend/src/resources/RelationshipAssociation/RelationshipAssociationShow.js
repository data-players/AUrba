import React from 'react';
import { Show, MainList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import RelationshipAssociationTitle from "./RelationshipAssociationTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const RelationshipAssociationShow = props => (
    <Show title={<RelationshipAssociationTitle />} {...props}>
        <MainList>
          <ReferenceField  reference="Organization" source="aurba:relationshipOrganizationFrom" linkType="show">
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField  reference="Organization" source="aurba:relationshipOrganizationTo" linkType="show">
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
            <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField reference="RelationshipAssociationKind" source="aurba:relationshipAssociationKindType">
            <TextField source="pair:label" />
          </ReferenceField>
        </MainList>
    </Show>
);

export default RelationshipAssociationShow;
