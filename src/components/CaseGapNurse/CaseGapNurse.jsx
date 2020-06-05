import React from 'react';
import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const CaseGapNurse = () => (
  <Box background={{ color: '#F0F6F4' }}>
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
        <RouterLink to="gapnurse-case-study">See case study</RouterLink>
      </Box>
      <Box align="center">
        <img src="./assets/phoneGapnurse.svg" alt="Gatsby Scene" />
      </Box>
    </Grid>
  </Box>
);
