import React from 'react';
import { List, SimpleList } from "@semapps/archipelago-layout";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";

const RelationshipAssociationKindList = props => (
    <List  {...props}>
        <SimpleList primaryText={record => record['pair:label']} linkType="show" />
    </List>
)

export default RelationshipAssociationKindList;
