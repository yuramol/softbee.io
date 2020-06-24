import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';

export const LookingSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 3;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1050px)' });
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
          boxShadow: '0px 0px 75px',
          color: '#F3F3F3',
          borderRadius: '55px',
        }}
        round
        gap="small"
      >
        <Box justify="center" pad={{ vertical: 'large' }}>
          <img
            style={{ transform: 'rotate(-15.26deg)' }}
            src="./assets/gears.svg"
            alt="Gatsby Scene"
          />
        </Box>
        {isMobile || (
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
              Looking for a team willing to go the extra mile for you?
            </Heading>
            <Heading level={fontSizeTablet} color="brand">
              You&apos;re in the right place.
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
              Looking for a team willing to go the extra mile for you?
            </Heading>
            <Heading
              level={fontSizeMobile}
              color="brand"
              style={{ fontWeight: '300' }}
            >
              You&apos;re in the right place.
            </Heading>
          </Box>
        )}
        <Box justify="center" pad={{ vertical: 'large' }}>
          <img src="./assets/arrow.svg" alt="Gatsby Scene" />
        </Box>
      </Grid>
    </Box>
  );
};
