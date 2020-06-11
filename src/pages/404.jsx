import React from 'react';
import { graphql } from 'gatsby';
import { Grommet, Box } from 'grommet';

import { SEO } from '../components/SEO';
import { theme } from '../utils/theme';

const NotFoundPage = () => {
  return (
    <Grommet full theme={theme}>
      <SEO title="404: Not Found" />
      <Box background="brand" fill align="center" justify="center">
        <h1>Not Found ¯\_(ツ)_/¯</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Box>
    </Grommet>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
