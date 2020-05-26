import React from 'react';
import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { TextColor, textDark, cyan } from '../../utils/colors';
import { Link } from '../../legos/Link';

const GapNurseSection = () => (
  <Box background={{ color: '#F0F6F4' }}>
    <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
      <Box justify="center" align="start">
        <Box width="470px" pad={{ bottom: 'small' }}>
          <Heading level={2} color={TextColor}>
            They really help to fight COVID-19 in US
          </Heading>
        </Box>
        <Box width="380px" pad={{ bottom: 'medium' }}>
          <Text
            size="medium"
            color={textDark}
            style={{ fontFamily: 'HelveticaNeueCyr' }}
          >
            GapNurse, facilities know they’re covered during critical moments
            and unexpected absences without breaking your budget.
          </Text>
        </Box>
        <Link to="gapnurse-case-study" color={cyan}>
          See case study
        </Link>
      </Box>
      <Box align="center">
        <img src="./assets/phoneGapnurse.svg" alt="Gatsby Scene" />
      </Box>
    </Grid>
  </Box>
);

export default GapNurseSection;
