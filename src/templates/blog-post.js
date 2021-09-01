/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Grid, Heading } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const postsRecent = data.allMdx.edges;
  const siteTitle = data.site.siteMetadata.title;
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const { previous, next } = pageContext;
  const columnsCount = isMobile ? 1 : 3;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <RouterLink to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </RouterLink>
              )}
            </li>
            <li>
              {next && (
                <RouterLink to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </RouterLink>
              )}
            </li>
          </ul>
        </Grid>
      </Box>
      <Box background={{ color: '#F0F6F4' }}>
        <Grid
          columns={{ count: columnsCount, size: 'auto' }}
          pad={{ top: 'xlarge', bottom: 'xlarge' }}
          style={{ height: 'auto' }}
          align="center"
          justify="center"
          justifyContent="around"
        >
          {postsRecent.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Box key={node.fields.slug} pad={{ vertical: 'large' }}>
                <Grid
                  columns={['auto', 'auto']}
                  gap="small"
                  justify="center"
                  justifyContent="between"
                >
                  <Box
                    style={
                      isTablet
                        ? {
                            width: '95%',
                            height: '17vw',
                          }
                        : {
                            width: '380px',
                            height: '10vw',
                          }
                    }
                    margin={
                      isTablet
                        ? {
                            top: '75px',
                            bottom: '75px',
                          }
                        : {
                            top: 'auto',
                          }
                    }
                    justify="center"
                    align="center"
                  >
                    <img
                      style={{ height: 'auto', width: '100%' }}
                      src="/assets/rectangle.png"
                      alt="On laptop open code editor"
                    />
                    <RouterLink
                      style={{ boxShadow: `none` }}
                      to={`/blog${node.fields.slug}`}
                    >
                      <Box pad={{ top: 'small' }}>
                        <Heading
                          level={4}
                          margin={{ top: 'none', bottom: '15px' }}
                          style={
                            isTablet
                              ? {
                                  maxWidth: '250px',
                                }
                              : {
                                  maxWidth: '380px',
                                }
                          }
                          truncate
                          color="#104065"
                        >
                          {title}
                        </Heading>
                      </Box>
                    </RouterLink>
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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
