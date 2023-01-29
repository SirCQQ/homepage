import React from 'react';
import Page from './core/page';

const Posts: React.FunctionComponent<React.PropsWithChildren<any>> = ({
  children,
  ...props
}) => {
  return <Page {...props}>Latest Posts:</Page>;
};

export default Posts;
