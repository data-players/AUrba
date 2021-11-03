import React from 'react';
import { Show, MainList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import GroupTypeTitle from "./GroupTypeTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const GroupTypeShow = props => (
  <Show title={<GroupTypeTitle />} {...props}>
    <MainList>
      <TextField source="pair:label"></TextField>
      <MarkdownField source="pair:description" />
    </MainList>
  </Show>
);

export default GroupTypeShow;
