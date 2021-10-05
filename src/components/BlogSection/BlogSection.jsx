import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';
import { BlogItem } from './BlogItem';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const BlogSection = ({ withBackground }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `);
  const posts = data.allMdx.edges;
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isTablet = maxBreakpoints('tablet', size);
  const isMobile = maxBreakpoints('mobile', size);

  const fontSizeVariant = isMobile ? 6 : 2;
  const paddingVariant = isMobile
    ? 'large'
    : { horizontal: 'xlarge', top: 'xlarge' };

  return (
    <Box
      justify="center"
      height={isTablet ? undefined : '800px'}
      background={
        withBackground
          ? {
              color: '#f0f6f4',
            }
          : undefined
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        gap="small"
        pad={paddingVariant}
        justify="center"
      >
        <Box justify="center">
          <Box
            pad={isTablet ? { horizontal: 'xsmall', top: 'xlarge' } : 'large'}
            align="center"
          >
            {posts.map((item, index) => {
              return (
                <BlogItem
                  post={item.node}
                  first={index === 0}
                  key={item.node.fields.slug}
                />
              );
            })}
          </Box>
        </Box>
        {!isMobile && (
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="/assets/home-news.jpg"
              alt="On laptop open code editor"
            />
          </Box>
        )}
      </Grid>
      <Box
        justify="start"
        align="center"
        pad={isTablet ? { bottom: 'xlarge' } : undefined}
      >
        <RouterLink to="blog">
          <Heading margin="large" level={fontSizeVariant}>
            <RouterLink to="blog">See our blog</RouterLink>
          </Heading>
        </RouterLink>
      </Box>
    </Box>
  );
};

BlogSection.propTypes = {
  withBackground: PropTypes.bool,
};

BlogSection.defaultProps = {
  withBackground: undefined,
};
