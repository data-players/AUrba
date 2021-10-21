import React from 'react';
import { Show, Column, ColumnShowLayout} from "@semapps/archipelago-layout";
import { ReferenceArrayField} from "@semapps/semantic-data-provider";
import GroupTitle from "./GroupTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  useShowController,
  UrlField,
  ReferenceField,
  TextField,
  SingleFieldList,
  ChipField
} from 'react-admin';

const GroupShow = props => {
  const {
      record, // record fetched via dataProvider.getOne() based on the id from the location
  } = useShowController(props);
  return (
    <Show title={<GroupTitle />} {...props}>
      <ColumnShowLayout>
        <Column xs={12} sm={12} showLabel>
          <MarkdownField source="pair:description" />
          <ReferenceField reference="Group" source="pair:partOf" linkType="show" label="groupe">
              <TextField source="pair:label" />
          </ReferenceField>
          <ReferenceArrayField reference="Agent" source="pair:hasPart" label="composition">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" linkType="show"/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField reference="GroupType" source="pair:hasConceptType" linkType="show" label="type de groupe">
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

export default GroupShow;
