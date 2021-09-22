import React from 'react';
import { SimpleList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextField,
  Datagrid,
  TextInput,
  List,
  EditButton
} from 'react-admin';


const relationFilters = [
  <ReferenceInput reference="Organization" source="aurba:relationshipOrganizationFrom" alwaysOn>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>,
  <ReferenceInput  reference="Organization" source="aurba:relationshipOrganizationTo" alwaysOn>
    <SelectInput optionText="pair:label" />
  </ReferenceInput>,
];

const RelationshipAssociationList = props => (
    <List  {...props} filters={relationFilters}>
        <Datagrid>
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
            <EditButton />
        </Datagrid>
    </List>
)

export default RelationshipAssociationList;
