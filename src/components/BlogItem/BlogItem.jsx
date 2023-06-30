import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Box, Grid, Text, Heading } from 'grommet';

import { theme } from '../../utils/theme';
import { ImgLink, BlogItemLink, Img } from './styled';

export const BlogItem = ({ post }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <Box
      key={post.fields.slug}
      pad={
        isMobile
          ? { horizontal: 'xsmall', vertical: 'large' }
          : { vertical: 'medium' }
      }
    >
      {isMobile ? (
        <Box style={{ alignItems: 'center' }} pad={{ horizontal: 'large' }}>
          <ImgLink slug={post.fields.slug}>
            <Img src={post.frontmatter.image} alt={title} />
          </ImgLink>
          <BlogItemLink
            slug={post.fields.slug}
            disableUnderline
            activeColor={theme.global.colors.focus}
          >
            <Heading level={4} margin={{ top: 'none', bottom: '15px' }}>
              {title}
            </Heading>
          </BlogItemLink>
          {/* <small>{post.frontmatter.date}</small> */}
          <Text
            size={isMobile ? 'small' : undefined}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description,
              // || post.excerpt,
            }}
          />
        </Box>
      ) : (
        <Grid
          columns={['auto', 'auto']}
          gap="small"
          justify="stretch"
          justifyContent="between"
        >
          <Box pad={{ right: 'large' }}>
            <BlogItemLink
              slug={post.fields.slug}
              disableUnderline
              activeColor={theme.global.colors.focus}
            >
              <Heading level={4} margin={{ top: 'none', bottom: '15px' }}>
                {title}
              </Heading>
            </BlogItemLink>
            {/* <small>{post.frontmatter.date}</small> */}
            <Text
              size={isMobile ? 'small' : undefined}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description,
                // || post.excerpt,
              }}
            />
          </Box>
          <ImgLink slug={post.fields.slug}>
            <Img src={post.frontmatter.image} alt={title} />
          </ImgLink>
        </Grid>
      )}
    </Box>
  );
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    // excerpt: PropTypes.string,
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
