import React from 'react';

import PropTypes from 'prop-types';
import { Box, Grid, Text, Heading } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { RouterLink } from '../../legos/RouterLink';

export const BlogItem = ({ post }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <Box
      key={post.fields.slug}
      pad={
        isMobile
          ? { horizontal: 'xsmall', vertical: 'large' }
          : { horizontal: 'xlarge', vertical: 'large' }
      }
    >
      <Grid
        columns={['auto', 'auto']}
        gap="small"
        justify="stretch"
        justifyContent="between"
        pad={isTablet ? { horizontal: 'medium' } : { horizontal: 'xlarge' }}
      >
        <Box pad={{ right: 'large' }}>
          <RouterLink
            style={{ boxShadow: `none` }}
            to={`/blog${post.fields.slug}`}
          >
            <Box>
              <Heading level={4} margin={{ top: 'none', bottom: '15px' }}>
                {title}
              </Heading>
            </Box>
          </RouterLink>
          {/* <small>{post.frontmatter.date}</small> */}
          <Text
            size={isMobile ? 'small' : undefined}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
          />
        </Box>
        <Box
          style={
            isTablet
              ? {
                  width: '17vw',
                  height: '17vw',
                  minHeight: '100px',
                  minWidth: '100px',
                }
              : {
                  width: '10vw',
                  height: '10vw',
                }
          }
          justify="center"
          align="center"
        >
          <img
            style={{ height: 'auto', width: '100%' }}
            src={post.frontmatter.image}
            alt={title}
          />
        </Box>
      </Grid>
    </Box>
  );
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};
