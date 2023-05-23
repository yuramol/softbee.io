/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Grid, Heading, ResponsiveContext, Nav } from 'grommet';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { maxBreakpoints } from '../utils/useBreakpoints';
import { theme } from '../utils/theme';
import Container from '../components/Layout/Container';
import { ImgCover } from '../components/Layout/ImgCover';
import { BlogItem } from './styled';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const postsRecent = data.allMdx.edges;
  const siteTitle = data.site.siteMetadata.title;
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('desktopOrTablet', size);
  const { previous, next } = pageContext;
  const columnsCount = isMobile ? 1 : 3;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <SiteHeader />
      <Container>
        <Grid
          //  columns={{ count: 1 }}
          gap="small"
          pad={
            isTablet
              ? { top: 'xlarge' }
              : { horizontal: 'xlarge', top: 'xlarge' }
          }
        >
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr />
          <Nav direction="row" justify="between" pad={{ vertical: 'small' }}>
            {previous && (
              <RouterLink
                //  hoveredColor={theme.global.colors.brand}
                to={`/blog${previous.fields.slug}`}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </RouterLink>
            )}
            {next && (
              <RouterLink
                //  hoveredColor={theme.global.colors.brand}
                to={`/blog${next.fields.slug}`}
                rel="next"
              >
                {next.frontmatter.title} →
              </RouterLink>
            )}
          </Nav>
        </Grid>
      </Container>
      <Box background={{ color: '#f0f6f4' }}>
        <Container>
          <Grid
            columns={{ count: columnsCount, size: 'auto' }}
            gap={isTablet ? 'small' : 'large'}
            pad={{ vertical: 'large' }}
            align="center"
            justify="center"
            justifyContent="around"
          >
            {postsRecent.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <Box
                  width="100%"
                  key={node.fields.slug}
                  pad={{ vertical: 'large' }}
                >
                  <RouterLink to={`/blog${node.fields.slug}`}>
                    <BlogItem bottomFlex="56.476%">
                      <ImgCover
                        src="/assets/rectangle.png"
                        alt="On laptop open code editor"
                      />
                    </BlogItem>
                  </RouterLink>

                  <RouterLink
                    to={`/blog${node.fields.slug}`}
                    disableUnderline
                    color={theme.global.colors.brand}
                    hoveredColor={theme.global.colors['accent-2']}
                  >
                    <Heading
                      level={4}
                      margin={{ top: '20px', bottom: '15px' }}
                      truncate
                      textAlign="center"
                    >
                      {title}
                    </Heading>
                  </RouterLink>
                </Box>
              );
            })}
          </Grid>
        </Container>
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
      # excerpt(pruneLength: 160)
      # body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          # excerpt
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
