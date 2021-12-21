import React from 'react';
import { ReferenceField } from "@semapps/semantic-data-provider";
import { Avatar } from "@material-ui/core";
import {
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  TextField,
  Datagrid,
  TextInput,
  List,
  EditButton,
  ShowButton
} from 'react-admin';


const relationFilters = [
  <ReferenceInput reference="Agent" source="aurba:relationshipOrganizationFrom" alwaysOn>
    <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
  </ReferenceInput>,
  <ReferenceInput  reference="Agent" source="aurba:relationshipOrganizationTo" alwaysOn>
    <AutocompleteInput optionText="pair:label" shouldRenderSuggestions={value => value && value.length > 1}/>
  </ReferenceInput>,
];

const RelationshipAssociationList = props => (
    <List  {...props} filters={relationFilters} sort={{ field: 'aurba:relationshipOrganizationFrom', order: 'ASC' }} perPage="50">
        <Datagrid>
            <ReferenceField  reference="Agent" source="aurba:relationshipOrganizationFrom" linkType="show" sortBy="pair:label">
              <TextField source="pair:label" />
            </ReferenceField>
            <ReferenceField  reference="Agent" source="aurba:relationshipOrganizationTo" linkType="show">
              <TextField source="pair:label" />
            </ReferenceField>
            <ReferenceField reference="RelationshipAssociationProximity" source="aurba:relationshipAssociationProximityType">
              <TextField source="pair:label" />
            </ReferenceField>
            <ReferenceField reference="RelationshipAssociationKind" source="aurba:relationshipAssociationKindType">
              <TextField source="pair:label" />
            </ReferenceField>
            <ShowButton />
        </Datagrid>
    </List>
)

export default RelationshipAssociationList;
