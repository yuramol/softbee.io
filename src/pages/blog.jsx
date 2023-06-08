import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Grid, ResponsiveContext } from 'grommet';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { BlogItem } from '../components/BlogItem/BlogItem';
import BlogContainer from '../components/Layout/BlogContainer';
import { maxBreakpoints } from '../utils/useBreakpoints';

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.blogs.edges;
  const size = React.useContext(ResponsiveContext);
  const isTablet = maxBreakpoints('desktopOrTablet', size);

  return (
    <Layout location={location} title={siteTitle} withBackground>
      <SEO title="All posts" />
      <SiteHeader />
      <BlogContainer
        gap="small"
        pad={
          isTablet ? { horizontal: 'xlarge', top: 'xlarge' } : { top: 'xlarge' }
        }
      >
        <Grid style={{ marginBottom: '40px' }}>
          {posts.map(({ node }) => {
            return <BlogItem post={node} key={node.fields.slug} />;
          })}
        </Grid>
      </BlogContainer>
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
    blogs: allMdx(
      filter: { frontmatter: { templateKey: { eq: "blogItem" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          # excerpt
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
