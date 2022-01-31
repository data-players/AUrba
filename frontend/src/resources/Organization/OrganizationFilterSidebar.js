import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { ReferenceFilter } from '@semapps/archipelago-layout';

import {
  TextInput,
  ReferenceInput,
  TextField,
  SelectInput,
  FilterLiveSearch,
  FilterList,
  FilterListItem
} from 'react-admin';

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: '15em',
      marginLeft: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  cardContent: {
    paddingTop: 0
  }
}));

const OrganizationFilterSidebar = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <FilterLiveSearch label="Rechercher" source="q" />
        <ReferenceFilter
          label="Source de données"
          reference="DataSource"
          source="aurba:hasDataSource"
          inverseSource="aurba:dataSourceOf"
          sort={{ field: 'pair:label', order: 'DESC' }}
          limit={100}
        />

        <ReferenceFilter
          label="Thématiques"
          reference="Branch"
          source="pair:hasBranch"
          inverseSource="pair:branchOf"
          sort={{ field: 'pair:label', order: 'DESC' }}
          limit={100}
        />
        <ReferenceFilter
          label="Mode d'action"
          reference="OperationalMode"
          source="aurba:hasOperationalModes"
          inverseSource="aurba:operationalModesOf"
          sort={{ field: 'pair:label', order: 'DESC' }}
          limit={100}
        />
        <FilterList
            label="statut"
            source="aurba:externalDeleted"
        >
            <FilterListItem
                label="supprimé à la source"
                value={{"aurba:externalDeleted":"true"}}
            />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default OrganizationFilterSidebar;
