import React from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const GapNurseSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1030px)' });
  const heightSection = withBackground ? '700px' : '800px';
  // const paddingVarTablet = isTablet
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  return (
    <Box
      height={isTablet ? undefined : heightSection}
      background={
        withBackground
          ? {
              size: 'small',
              position: 'top right',
              image: 'url(./assets/background-gapNurse.svg)',
              color: '#F0F6F4',
            }
          : {
              color: '#F0F6F4',
            }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        gap="large"
        pad={paddingVariant}
      >
        <Box justify="center" align="center" pad={{ horisontal: 'large' }}>
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
          {isMobile || (
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
        {isMobile && (
          <Box align="center" pad={{ top: 'medium', bottom: 'xlarge' }}>
            <RouterLink to="gapnurse-case-study">See case study</RouterLink>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

GapNurseSection.propTypes = {
  withBackground: PropTypes.bool,
};

GapNurseSection.defaultProps = {
  withBackground: undefined,
};
