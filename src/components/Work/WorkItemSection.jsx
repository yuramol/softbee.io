import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const WorkItemSection = ({
  path,
  title,
  text,
  thumbnail,
  thumbnailSecond,
  reversedGrid,
}) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1112px)' });
  const heightSection = '700px';
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  const link = `/work/${path}`;

  const Info = (
    <Box
      justify="center"
      align={isMobile ? 'center' : 'start'}
      pad={{ horizontal: 'large' }}
    >
      <Box pad={{ bottom: 'small' }}>
        <Heading
          level={fontSizeVariant}
          color="brand"
          textAlign={textAlignVariant}
        >
          {title}
        </Heading>
      </Box>
      <Box
        pad={
          isMobile
            ? { bottom: 'medium', horizontal: 'medium' }
            : { bottom: 'medium' }
        }
      >
        <Text
          size="medium"
          color="text-dark-grey"
          style={{ fontFamily: 'HelveticaNeueCyr', whiteSpace: 'pre-line' }}
        >
          {text}
        </Text>
      </Box>
      {isMobile || <RouterLink to={link}>See case</RouterLink>}
    </Box>
  );

  const Thumbnails = (
    <Grid columns={{ count: 2, size: 'auto' }}>
      <Box align="center" justify="center">
        <img
          style={{ height: 'auto', width: '100%' }}
          src={thumbnail}
          alt={title}
        />
      </Box>
      {thumbnailSecond && (
        <Box align="center" justify="center">
          <img
            style={{ height: 'auto', width: '100%' }}
            src={thumbnailSecond}
            alt={title}
          />
        </Box>
      )}
    </Grid>
  );

  return (
    <Box
      height={isTablet ? undefined : heightSection}
      justify="center"
      background={{ color: 'white' }}
    >
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        gap="large"
        pad={paddingVariant}
      >
        {reversedGrid ? (
          <>
            {Thumbnails}
            {Info}
          </>
        ) : (
          <>
            {Info}
            {Thumbnails}
          </>
        )}
        {isMobile && (
          <Box align="center" pad={{ top: 'medium', bottom: 'xlarge' }}>
            <RouterLink to={link}>See case</RouterLink>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

WorkItemSection.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  thumbnailSecond: PropTypes.string.isRequired,
  reversedGrid: PropTypes.bool,
};

WorkItemSection.defaultProps = {
  reversedGrid: false,
};
