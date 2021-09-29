const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });

  const workItem = path.resolve(`./src/templates/work-case.js`);
  graphql(
    `
      {
        works: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "workItem" } } }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                text
                logo
                thumbnail
                thumbnailSecond
                technologies
                languages
                time
                screenshots
                preview {
                  title
                  text
                }
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create work items pages.
    const works = result.data.works.edges;

    works.forEach((work, index) => {
      const previous =
        index === works.length - 1 ? null : works[index + 1].node;
      const next = index === 0 ? null : works[index - 1].node;

      createPage({
        path: `work/${work.node.frontmatter.path}`,
        component: workItem,
        context: {
          slug: work.node.frontmatter.path,
          previous,
          next,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
