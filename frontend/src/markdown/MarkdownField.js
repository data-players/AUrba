import React from 'react';
import { LargeLabel } from '@semapps/archipelago-layout';
import Markdown from 'markdown-to-jsx';

const MarkdownField = ({ source, record }) => {
  console.log('record',record);
    if (record && record[source]){
      return (
        <Markdown options={{
          createElement(type, props, children) {
            if( props.label ) {
              return (
                <>
                  <LargeLabel>{props.label}</LargeLabel>
                  {React.createElement(type, props, children)}
                </>
              );
            } else {
              return React.createElement(type, props, children)
            }
          },
          overrides: {
            h1: LargeLabel
          },
        }}>
          {record[source]}
        </Markdown>
      )
    } else {
      return null
    }
  }

MarkdownField.defaultProps = {
  addLabel: true
};

export default MarkdownField;
