import React from 'react';

import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const BlogItem = ({ post, first }) => {
  const size = React.useContext(ResponsiveContext);
  const isTablet = maxBreakpoints('tablet', size);
  const isMobile = maxBreakpoints('mobile', size);
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    (isTablet && !first) || (
      <Box
        pad={{ bottom: first ? 'small' : 'medium' }}
        align={textAlignVariant}
      >
        <Heading
          textAlign={textAlignVariant}
          level={isMobile ? 3 : 2}
          color="brand"
          margin={{ vertical: 'small' }}
          style={isMobile ? { fontWeight: '400' } : undefined}
        >
          {post.frontmatter.title}
        </Heading>
        <Text size="medium" color="text-dark-grey">
          {post.frontmatter.description}
          <RouterLink to={`/blog${post.fields.slug}`}> read more</RouterLink>
        </Text>
      </Box>
    )
  );
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
  first: PropTypes.bool.isRequired,
};
