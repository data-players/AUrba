import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Show, MainList } from '@semapps/archipelago-layout';
import { MarkdownField } from '@semapps/markdown-components';
import PageTitle from './PageTitle';

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: 9
  }
}));

const PageShow = props => {
  const classes = useStyles();
  return (
    <Show title={<PageTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <Typography variant="h3" color="primary" component="h1" id="react-admin-title" />
        <MarkdownField source="semapps:content" addLabel={false} />
      </MainList>
    </Show>
  );
};

export default PageShow;
