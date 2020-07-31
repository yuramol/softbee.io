/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Image } from 'grommet';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

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
          fill
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
                <RouterLink to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </RouterLink>
              )}
            </li>
            <li>
              {next && (
                <RouterLink to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </RouterLink>
              )}
            </li>
          </ul>
        </Box>
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
