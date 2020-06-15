import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Box, Grid, Text, Heading } from 'grommet';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Button } from '../legos/Button/Button';
import { RouterLink } from '../legos/RouterLink';

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle} withBackground>
      <SEO title="All posts" />
      <Box>
        <Grid
          columns={{ count: 1 }}
          gap="small"
          pad={{ horizontal: 'xlarge', top: 'xlarge' }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Box
                key={node.fields.slug}
                pad={{ horizontal: 'xlarge', vertical: 'large' }}
              >
                <Grid
                  columns={['2/3', '1/3']}
                  gap="small"
                  pad={{ horizontal: 'xlarge' }}
                >
                  <Box pad={{ left: 'large' }}>
                    <RouterLink
                      style={{ boxShadow: `none` }}
                      to={`blog${node.fields.slug}`}
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
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </Box>
                  <Box justify="center" align="center">
                    <img
                      src="./assets/HowWriteJava.png"
                      alt="On laptop open code editor"
                    />
                  </Box>
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </Box>
      <RouterLink to="/">
        <Button marginTop="85px">Go Home</Button>
      </RouterLink>
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
