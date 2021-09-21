import React from 'react';
import { List, SimpleList } from "@semapps/archipelago-layout";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";

const RelationshipAssociationList = props => (
    <List  {...props}>
        <SimpleList primaryText={record => (`${record['aurba:relationshipOrganizationFrom']?.['pair:label']} -> ${record['aurba:relationshipOrganizationTo']?.['pair:label']} : ${record['aurba:relationshipAssociationProximityType']?.['pair:label']}`)} linkType="edit" />
    </List>
)

export default RelationshipAssociationList;
