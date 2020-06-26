import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const GapNurseSection = ({ withBackground }) => (
  <Box
    justify="center"
    height={withBackground ? '700px' : '800px'}
    background={
      withBackground
        ? {
            size: 'small',
            position: 'top right',
            image: 'url(../../assets/background-gapNurse.svg)',
            color: '#F0F6F4',
          }
        : {
            color: '#FFFFFF',
          }
    }
  >
    <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
      <Box justify="center" align="start">
        <Box width="470px" pad={{ bottom: 'small' }}>
          <Heading level={2} color="brand">
            They really help to fight COVID-19 in US
          </Heading>
        </Box>
        <Box width="380px" pad={{ bottom: 'medium' }}>
          <Text
            size="medium"
            color="text-dark-grey"
            style={{ fontFamily: 'HelveticaNeueCyr' }}
          >
            GapNurse, facilities know they’re covered during critical moments
            and unexpected absences without breaking your budget.
          </Text>
        </Box>
        <RouterLink to="gapnurse-case-study" color="#25BBC5">
          See case study
        </RouterLink>
      </Box>
      <Grid
        columns={{ count: 2, size: 'auto' }}
        gap="xlarge"
        pad={{ right: 'xlarge' }}
      >
        <Box align="center">
          <img
            src="../../assets/PhoneGapnurse.png"
            alt="The iphone that shows the application GapNurse"
          />
        </Box>
        <Box align="center">
          <img
            src="../../assets/PhoneGapnurse2.png"
            alt="The iphone that shows the application GapNurse"
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

GapNurseSection.propTypes = {
  withBackground: PropTypes.bool,
};

GapNurseSection.defaultProps = {
  withBackground: undefined,
};
