import React from 'react';
import { Show, Column, ColumnShowLayout} from "@semapps/archipelago-layout";
import { ReferenceArrayField,ReferenceField} from "@semapps/semantic-data-provider";
import OrganizationTitle from "./OrganizationTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  useShowController,
  UrlField,
  TextField,
  ChipField,
  SingleFieldList
} from 'react-admin';

const OrganizationShow = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useShowController(props);
  return (
    <Show title={<OrganizationTitle />} {...props}>
      <ColumnShowLayout>
        <Column xs={12} sm={12} showLabel>
          <MarkdownField source="pair:description" />
          <UrlField source="aurba:externalUrl" target="_blank" rel="noreferrer"/>
          <ReferenceArrayField reference="Branch" source="pair:hasBranch">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" linkType="show"/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField reference="Group" source="pair:partOf" linkType="show">
              <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceField reference="DataSource" source="aurba:hasDataSource" linkType="show">
              <TextField source="pair:label" />
          </ReferenceField>
          <Button component={Link} variant="outlined" to={{
              pathname: `../../RelationshipAssociation`,
              search: `filter=${JSON.stringify({ 'aurba:relationshipOrganizationFrom': record?.id})}`,
            }}>voir les liens depuis</Button>
            <Button component={Link} variant="outlined" to={{
                pathname: `../../RelationshipAssociation`,
                search: `filter=${JSON.stringify({ 'aurba:relationshipOrganizationTo': record?.id})}`,
              }}>voir les liens vers</Button>
        </Column>
      </ColumnShowLayout>
    </Show>
  );
};

export default OrganizationShow;
