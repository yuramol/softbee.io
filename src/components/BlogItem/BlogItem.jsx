import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Box, Text, Heading } from 'grommet';

import { theme } from '../../utils/theme';
import { ImgLink, BlogItemLink, Img } from './styled';

export const BlogItem = ({ post }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <Box
      key={post.fields.slug}
      pad={isMobile ? { vertical: 'large' } : { vertical: 'medium' }}
    >
      <Box>
        <BlogItemLink
          slug={post.fields.slug}
          disableUnderline
          activeColor={theme.global.colors.focus}
        >
          <Heading
            level={4}
            margin={{ top: 'none', bottom: '24px' }}
            style={{ maxWidth: '100%' }}
          >
            {title}
          </Heading>
        </BlogItemLink>
        <ImgLink slug={post.fields.slug}>
          <Img src={post.frontmatter.image} alt={title} />
        </ImgLink>
        {/* <small>{post.frontmatter.date}</small> */}
        <Text
          size={isMobile ? 'small' : undefined}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description,
          }}
        />
      </Box>
    </Box>
  );
};

BlogItem.propTypes = {
  post: PropTypes.shape({
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

BlogItemLink.propTypes = {
  slug: PropTypes.string.isRequired,
};
