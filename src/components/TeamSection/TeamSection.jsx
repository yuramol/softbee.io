import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const TeamSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile ? 'large' : 'xlarge';
  return (
    <Grid
      columns={{ count: columnsCount, size: 'auto' }}
      gap="medium"
      pad={paddingVariant}
    >
      <Box
        pad={isMobile ? { top: 'xlarge' } : undefined}
        justify="center"
        align="center"
      >
        <img
          style={{ height: 'auto', width: '100%' }}
          src="/assets/section.svg"
          alt="Man working at the computer"
        />
      </Box>
      <Box justify="center" align={textAlignVariant}>
        <Box>
          <Heading
            level={fontSizeVariant}
            color="brand"
            textAlign={textAlignVariant}
          >
            {title}
          </Heading>
        </Box>
        <Box
          width="491px"
          pad={{ bottom: 'large' }}
          style={{ whiteSpace: 'pre-line' }}
        >
          <Box pad={{ bottom: 'medium' }}>
            <Text size="medium" color="text-dark-grey">
              {text}
            </Text>
          </Box>
          <Box
            align={isMobile ? 'center' : 'start'}
            pad={isTablet ? { top: 'large' } : { vertical: 'medium' }}
          >
            <RouterLink to="our-team">Meet our team &#128074;</RouterLink>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
