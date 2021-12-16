import React from 'react';
import { Show, Column, ColumnShowLayout} from "@semapps/archipelago-layout";
import { ReferenceArrayField,ReferenceField} from "@semapps/semantic-data-provider";
import OrganizationTitle from "./OrganizationTitle";
import MarkdownField from "../../markdown/MarkdownField";
import { MapField } from '@semapps/geo-components';
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
            <MapField
              source="pair:hasLocation"
              address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
              latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
              longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
            />
          <TextField source="aurba:perimeter" fullWidth/>
          <ReferenceArrayField reference="Branch" source="pair:hasBranch">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" linkType="show"/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Branch" source="aurba:hasSecondaryBranch">
            <SingleFieldList linkType="show">
              <ChipField source="pair:label" linkType="show"/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceArrayField reference="OperationalMode" source="aurba:hasOperationalModes">
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
