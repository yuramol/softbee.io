import React from 'react';
import { Box, Button, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

const MMOSection = () => (
  <Box
    height="800px"
    justify="center"
    background={{
      size: 'large',
      position: 'absolute',
      image: 'url(./assets/mmoBackground.svg)',
    }}
  >
    <Grid columns={['2/3', '1/4']} pad="xlarge">
      <Box direction="row" justify="center">
        <Box justify="center" align="start" margin={{ left: 'large' }}>
          <img src="./assets/sectionMMO.svg" alt="Gatsby Scene" />
        </Box>
        <Box justify="center" pad={{ left: 'xlarge', right: 'small' }}>
          <img src="./assets/mmoSectionMini.svg" alt="Gatsby Scene" />
        </Box>
      </Box>
      <Box justify="center" align="start" margin={{ right: 'large' }}>
        <Box>
          <Heading level={2} color="brand">
            MMO.cat selling website
          </Heading>
        </Box>
        <Box width="491px" pad={{ bottom: 'small' }}>
          <Box pad={{ bottom: 'large' }}>
            <Text size="medium" color="text-dark-grey">
              We provided full-stack development service
            </Text>
            <Text size="medium" color="text-dark-grey">
              for end-to-end websites of MMO.cat team
            </Text>
          </Box>
          <Button
            style={{ textDecorationLine: 'underline' }}
            plain
            label="See case study"
            color="#25BBC5"
          />
        </Box>
      </Box>
    </Grid>
  </Box>
);

export default MMOSection;
