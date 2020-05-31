import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { TextColor, textDark, cyan } from '../../utils/colors';
import { Link } from '../../legos/Link';

const GapNurseSection = ({ withBackground }) => (
    <Box background={ withBackground && { size: "small",
    position: "top right",
    image: "url(./assets/background-gapNurse.svg)", color: '#F0F6F4' }}>
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
        <Grid
          columns={{ count: 2, size: 'auto' }}
          gap="xlarge"
          pad={{ right: 'xlarge' }}
        >
          <Box align="center">
            <img
              src="./assets/PhoneGapnurse.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
          <Box align="center">
            <img
              src="./assets/PhoneGapnurse2.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
export default GapNurseSection;

GapNurseSection.propTypes = {
  withBackground: PropTypes.boolean
};

GapNurseSection.defaultProps = {
  withBackground: undefined
};
