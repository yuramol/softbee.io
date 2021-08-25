import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid } from 'grommet';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { BlogItem } from '../components/BlogItem/BlogItem';

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <Layout location={location} title={siteTitle} withBackground>
      <SEO title="All posts" />
      <SiteHeader />
      <Box>
        <Grid
          columns={{ count: 1 }}
          gap="small"
          pad={
            isTablet
              ? { top: 'xlarge' }
              : { horizontal: 'xlarge', top: 'xlarge' }
          }
        >
          {posts.map(({ node }) => {
            return <BlogItem post={node} key={node.fields.slug} />;
          })}
        </Grid>
      </Box>
      <SiteFooter />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf({}),
    }),
  }).isRequired,
};
