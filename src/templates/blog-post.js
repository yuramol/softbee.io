/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid, ResponsiveContext, Nav } from 'grommet';

import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { maxBreakpoints } from '../utils/useBreakpoints';
import Container from '../components/Layout/Container';

const MarkdownWrapper = styled.div`
  img {
    width: 100%;
  }
  p {
    overflow-wrap: anywhere;
  }
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const size = React.useContext(ResponsiveContext);
  const isTablet = maxBreakpoints('desktopOrTablet', size);
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <SiteHeader />
      <Container>
        <Grid
          gap="small"
          pad={
            isTablet ? { top: 'xlarge', horizontal: 'small' } : { top: '70px' }
          }
        >
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <MarkdownWrapper>
            {post.body && <MDXRenderer>{post.body}</MDXRenderer>}
          </MarkdownWrapper>
          <hr />
          <Nav direction="row" justify="between" pad={{ bottom: '50px' }}>
            {previous && (
              <RouterLink to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </RouterLink>
            )}
            {next && (
              <RouterLink to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </RouterLink>
            )}
          </Nav>
        </Grid>
      </Container>

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
