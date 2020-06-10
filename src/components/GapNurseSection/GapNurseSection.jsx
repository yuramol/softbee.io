import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const GapNurseSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const rowsCount = size === 'small' ? 2 : 1;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const textAlignVariant = isTabletOrMobile ? 'center' : 'start';
  const fontSizeVariant = isTabletOrMobile ? 6 : 2;
  const paddingVariant = isTabletOrMobile ? 'large' : 'xlarge';

  return (
    <Box background={{ color: '#F0F6F4' }}>
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        rows={{ count: rowsCount, size: 'auto' }}
        gap="large"
        pad={paddingVariant}
      >
        <Box
          justify="center"
          align={textAlignVariant}
          pad={{ horisontal: 'large' }}
        >
          <Box pad={{ bottom: 'small' }}>
            <Heading
              level={fontSizeVariant}
              color="brand"
              textAlign={textAlignVariant}
            >
              They really help to fight COVID-19 in US
            </Heading>
          </Box>
          <Box pad={{ bottom: 'medium' }}>
            <Text
              size="medium"
              color="text-dark-grey"
              style={{ fontFamily: 'HelveticaNeueCyr' }}
            >
              GapNurse, facilities know they’re covered during critical moments
              and unexpected absences without breaking your budget.
            </Text>
          </Box>
          {isTabletOrMobile || (
            <RouterLink to="gapnurse-case-study">See case study</RouterLink>
          )}
        </Box>
        <Grid columns={{ count: 2, size: 'auto' }}>
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="./assets/PhoneGapnurse.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="./assets/PhoneGapnurse2.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
        </Grid>
        {isTabletOrMobile && (
          <Box align="center">
            <RouterLink to="gapnurse-case-study">See case study</RouterLink>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
