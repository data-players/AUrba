import { RedirectByType } from '@semapps/archipelago-layout';
import React from 'react';
import { Show } from 'react-admin';

const AgentRedirect = props => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Group: 'pair:Group',
        Organization: 'pair:Organization',
      }}
    />
  </Show>
);

export default {
  config: {
    show: AgentRedirect
  },
  dataModel: {
    types: ['pair:Group', 'pair:Organization'],
  },
  translations: {
    fr: {
      name: 'Agent |||| Les agents',
    }
  }
};
