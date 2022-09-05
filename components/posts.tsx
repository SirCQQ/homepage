import React from 'react';
import Page from './page';

const Posts: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
  ...props
}) => {
  return <Page {...props}>This is a test </Page>;
};

export default Posts;
