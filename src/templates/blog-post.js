/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { Box, Image, Grid } from 'grommet';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';

import { RouterLink } from '../legos/RouterLink';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { Heading } from '../legos/typography/Heading';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SiteHeader />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Box margin={{ horizontal: 'xlarge' }} pad="xlarge">
        <Box
          margin={{ horizontal: 'xlarge' }}
          pad={{ horizontal: 'xlarge' }}
          justify="center"
          align="center"
        >
          <Image
            fill="horizontal"
            src="/assets/postimage.svg"
            alt="On laptop open code editor"
          />

          <Heading
            level={2}
            color="brand"
            textAlign="center"
            fontWeight="normal"
          >
            {post.frontmatter.title}
          </Heading>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Box>
      </Box>
      <Box
        background={{ color: '#F0F6F4' }}
        pad={{ horizontal: 'xlarge', vertical: 'medium' }}
        wrap
        direction="row"
      >
        <Grid columns={{ count: 3, size: 'auto' }}>
          <Box pad="medium" height="400px">
            <Image
              fit="cover"
              src="/assets/postimage.svg"
              alt="On laptop open code editor"
            />
            <Heading level={3} color="brand" textAlign="center" pad="none">
              {previous && (
                <RouterLink
                  to={`/blog${previous.fields.slug}`}
                  rel="prev"
                  color="#104065"
                  style={{ textDecoration: 'none' }}
                >
                  {previous.frontmatter.title}
                </RouterLink>
              )}
            </Heading>
          </Box>
          <Box pad="medium" height="400px">
            <Image
              fit="cover"
              src="/assets/postimage.svg"
              alt="On laptop open code editor"
            />
            <Heading level={3} color="brand" textAlign="center" pad="none">
              {next && (
                <RouterLink
                  to={`/blog${next.fields.slug}`}
                  rel="next"
                  color="#104065"
                  style={{ textDecoration: 'none' }}
                >
                  {next.frontmatter.title}
                </RouterLink>
              )}
            </Heading>
          </Box>
          <Box pad="medium" height="400px">
            <Image
              fit="cover"
              src="/assets/postimage.svg"
              alt="On laptop open code editor"
            />
            <Heading level={3} color="brand" textAlign="center" pad="none">
              How to write on Java?
            </Heading>
          </Box>
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
        description
      }
    }
  }
`;
