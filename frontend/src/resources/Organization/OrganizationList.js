import React from 'react';

import { MultiViewsList} from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

import { ReferenceField } from "@semapps/semantic-data-provider";
import {
  TextInput,
  List,
  Datagrid,
  ReferenceInput,
  TextField,
  EditButton,
  SelectInput,
  ShowButton
} from 'react-admin';
import OrganizationFilterSidebar from './OrganizationFilterSidebar';


const filters = [
    <TextInput label="Rechercher" source="q" alwaysOn />,
    <ReferenceInput reference="DataSource" source="aurba:hasDataSource" alwaysOn>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
];
// const OrganizationList = props => (
//     <List  {...props} filters={filters}>
//         <Datagrid>
//             <TextField source="pair:label" />
//             <TextField source="pair:description" />
//             <ReferenceField reference="DataSource" source="aurba:hasDataSource">
//               <TextField source="pair:label" />
//             </ReferenceField>
//             <ShowButton />
//         </Datagrid>
//     </List>
// )
//




const OrganizationList = props => {

  return <MultiViewsList
    aside={<OrganizationFilterSidebar />}
    views={{
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        filters: (<filters />),
        list: (
          <Datagrid>
              <TextField source="pair:label" />
              <TextField source="pair:description" />
              <ReferenceField reference="DataSource" source="aurba:hasDataSource">
                <TextField source="pair:label" />
              </ReferenceField>
              <ShowButton />
          </Datagrid>
        )
      },
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 10000,
        pagination: false,
        list: (
          <MapList
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
            label={record => record['pair:label']}
            description={record => record['pair:comment']}
            scrollWheelZoom
          />
        )
      }
    }}
    {...props}
  />

};


export default OrganizationList;
