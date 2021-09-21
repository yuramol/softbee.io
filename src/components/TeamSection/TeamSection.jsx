import React from 'react';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const TeamSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = size === 'mobile';
  const isTablet = size === 'tablet';
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
            We love taking products from vision to reality.
          </Heading>
        </Box>
        <Box width="491px" pad={{ bottom: 'large' }}>
          <Box pad={{ bottom: 'medium' }}>
            <Text size="medium" color="text-dark-grey">
              Somethings about how we work.We do all sorts of programming:
            </Text>
            <Text size="medium" color="text-dark-grey">
              Web, mobile, backend, desktop development.{' '}
            </Text>
            <Text size="medium" color="text-dark-grey">
              JS is our lovest language.Blala something more.
            </Text>
          </Box>
          <Box pad={{ bottom: 'medium' }}>
            <Text size="medium" color="text-dark-grey">
              re a team of passionated mobile and web developers who love y
              do.Also we love being on the same page with our clients and to
              deliver real cases to users.
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
