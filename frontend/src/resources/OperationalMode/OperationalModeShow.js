import React from 'react';
import { Show, MainList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import OperationalModeTitle from "./OperationalModeTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const OperationalModeShow = props => (
  <Show title={<OperationalModeTitle />} {...props}>
    <MainList>
      <TextField source="pair:label"></TextField>
      <MarkdownField source="pair:description" />
    </MainList>
  </Show>
);

export default OperationalModeShow;
