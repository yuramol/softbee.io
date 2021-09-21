import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Box, Grid, Text, Heading, ResponsiveContext } from 'grommet';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { maxBreakpoints } from '../utils/useBreakpoints';

const Blog = ({ data, location }) => {
  const size = React.useContext(ResponsiveContext);
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('desktopOrTablet', size);

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
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Box
                key={node.fields.slug}
                pad={
                  isMobile
                    ? { horizontal: 'xsmall', vertical: 'large' }
                    : { horizontal: 'xlarge', vertical: 'large' }
                }
              >
                <Grid
                  columns={['auto', 'auto']}
                  gap="small"
                  justify="stretch"
                  justifyContent="between"
                  pad={
                    isTablet
                      ? { horizontal: 'medium' }
                      : { horizontal: 'xlarge' }
                  }
                >
                  <Box pad={{ right: 'large' }}>
                    <RouterLink
                      style={{ boxShadow: `none` }}
                      to={`/blog${node.fields.slug}`}
                    >
                      <Box>
                        <Heading
                          level={4}
                          margin={{ top: 'none', bottom: '15px' }}
                        >
                          {title}
                        </Heading>
                      </Box>
                    </RouterLink>
                    {/* <small>{node.frontmatter.date}</small> */}
                    <Text
                      size={isMobile ? 'small' : undefined}
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Box>
                  <Box
                    style={
                      isTablet
                        ? {
                            width: '17vw',
                            height: '17vw',
                            minHeight: '100px',
                            minWidth: '100px',
                          }
                        : {
                            width: '10vw',
                            height: '10vw',
                          }
                    }
                    justify="center"
                    align="center"
                  >
                    <img
                      style={{ height: 'auto', width: '100%' }}
                      src="/assets/writeOnJava.png"
                      alt="On laptop open code editor"
                    />
                  </Box>
                </Grid>
              </Box>
            );
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
