import React from 'react';
import { Box, Button, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';


class GapNurseSection extends React.Component {
  render() {
    return (
      <Box background={{ color: '#F0F6F4' }}>
        <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
          <Box justify="center" align="start">
            <Box width="470px" pad={{ bottom: 'small' }}>
              <Heading level={2} color="#104065">
                They really help to fight COVID-19 in US
              </Heading>
            </Box>
            <Box width="380px" pad={{ bottom: 'medium' }}>
              <Text
                size="medium"
                color="#104065"
                style={{ fontFamily: 'HelveticaNeueCyr' }}
              >
                With GapNurse, facilities know they’re covered during critical
                moments and unexpected absences without breaking your budget.
              </Text>
            </Box>
            <Button
              style={{ textDecorationLine: 'underline' }}
              plain
              label="See case study"
              color="#25BBC5"
            />
          </Box>
          <Box align="center">
            <img src="./assets/phoneGapnurse.svg" alt="Gatsby Scene" />
          </Box>
        </Grid>
      </Box>
    );
  }
}

export default GapNurseSection;
