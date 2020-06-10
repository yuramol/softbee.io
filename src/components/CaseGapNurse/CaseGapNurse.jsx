import React from 'react';
import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';

export const CaseGapNurse = () => (
  <Box
    height="1210px"
    background={{
      size: 'small',
      image: 'url(../assets/backgroundCaseGapnurse.svg)',
    }}
  >
    <Grid
      columns={['1/3', '2/3']}
      rows={['50px', '1fr']}
      gap="small"
      areas={[
        { name: 'h', start: [0, 0], end: [1, 0] },
        { name: 't', start: [0, 1], end: [0, 1] },
        { name: 'g', start: [1, 1], end: [1, 1] },
      ]}
      pad="xlarge"
    >
      <Box width="100%" gridArea="h" align="center">
        <Heading size="medium" level={2} color="brand">
          Mobile app
        </Heading>
      </Box>
      <Box
        gridArea="t"
        justify="start"
        align="start"
        pad={{ left: 'large', top: 'large' }}
      >
        <Box>
          <img src="../assets/logoGapNurse.svg" alt=" Gap Nurse " />
        </Box>
        <Box
          width="470px"
          size="small"
          pad={{ bottom: 'xxsmall', top: 'xlarge' }}
        >
          <Heading
            size="small"
            level={4}
            color="brand"
            style={{ lineHeight: '130%' }}
          >
            About client:
          </Heading>
        </Box>

        <Box width="380px" pad={{ bottom: 'medium' }}>
          <Text
            size="medium"
            color="text-dark-grey"
            style={({ fontFamily: 'HelveticaNeueCyr' }, { lineHeight: '150%' })}
          >
            With GapNurse, facilities know they’re covered during critical
            moments and unexpected absences without breaking your budget.
          </Text>
        </Box>
      </Box>
      <Box gridArea="g" align="center" pad={{ left: 'large' }}>
        <img src="./assets/phoneGapnurse.svg" alt="Gatsby Scene" />
      </Box>
    </Grid>
    <Box width="1400px" align="center" margin={{ top: '40px' }}>
      <Grid columns={['1/3', '1/3', '1/3']}>
        <Box width="250px" align="center">
          <Heading level={4} color="white">
            Technologies:
          </Heading>
          <Heading level={4} color="white" style={{ fontWeight: '700' }}>
            React, Vue
          </Heading>
        </Box>
        <Box width="250px" align="center">
          <Heading level={4} color="white">
            Languages:
          </Heading>
          <Heading level={4} color="white" style={{ fontWeight: '700' }}>
            JS
          </Heading>
        </Box>
        <Box width="250px" align="center">
          <Heading level={4} color="white">
            Time:
          </Heading>
          <Heading level={4} color="white" style={{ fontWeight: '700' }}>
            124 h
          </Heading>
        </Box>
      </Grid>
    </Box>
  </Box>
);
