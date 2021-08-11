/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const { previous, next } = pageContext;

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
  }
`;
