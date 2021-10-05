import React from 'react';
import PropTypes from 'prop-types'

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const LookingSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 3;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tablet', size);
  const fontSizeTablet = isTablet ? 4 : 2;
  const fontSizeMobile = isMobile ? 3 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={paddingVariant}
      gap="medium"
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad="medium"
        margin={isMobile ? 'medium' : undefined}
        justify="center"
        alignContent="center"
        height="414px"
        width="1160px"
        style={{
          boxShadow: '0px 0px 30px 10px',
          color: '#e5e5e5',
          borderRadius: '55px',
        }}
        round
        gap="small"
      >
        <Box justify="center" pad={{ vertical: 'large' }}>
          <img
            style={{ transform: 'rotate(-15.26deg)' }}
            src="/assets/gears.svg"
            alt="Gears"
          />
        </Box>
        {!isMobile && (
          <Box
            style={{ textAlign: 'center' }}
            pad={{ vertical: 'large' }}
            justify="center"
            margin={{ vertical: 'medium' }}
            width={isTablet ? '24em' : '34em'}
          >
            <Heading
              justify="center"
              level={fontSizeTablet}
              color="brand"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              {title}
            </Heading>
            <Heading level={fontSizeTablet} color="brand">
              {text}
            </Heading>
          </Box>
        )}
        {isMobile && (
          <Box
            style={{ textAlign: 'center' }}
            pad={{ vertical: 'small' }}
            justify="center"
          >
            <Heading
              justify="center"
              level={fontSizeMobile}
              color="brand"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              {title}
            </Heading>
            <Heading
              level={fontSizeMobile}
              color="brand"
              style={{ fontWeight: '300' }}
            >
              {text}
            </Heading>
          </Box>
        )}
        <Box justify="center" pad={{ vertical: 'large' }}>
          <img src="/assets/arrow.svg" alt="Arrows" />
        </Box>
      </Grid>
    </Box>
  );
};

LookingSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
