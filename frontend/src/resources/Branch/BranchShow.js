import React from 'react';
import { Show, MainList } from "@semapps/archipelago-layout";
import { ReferenceField } from "@semapps/semantic-data-provider";
import BranchTitle from "./BranchTitle";
import MarkdownField from "../../markdown/MarkdownField";
import {
  TextField,
} from 'react-admin';

const BranchShow = props => (
  <Show title={<BranchTitle />} {...props}>
      <MarkdownField source="pair:description" />
  </Show>
);

export default BranchShow;
