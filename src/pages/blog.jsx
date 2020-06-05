import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { Button } from '../legos/Button/Button';
import { RouterLink } from '../legos/RouterLink';

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={{ margin: '20px 0 40px' }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3>
                <RouterLink
                  style={{ boxShadow: `none` }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </RouterLink>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
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
