import React from 'react';
import { Box, Button, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { TextColor, textDark } from '../../utils/colors';

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
    <Grid columns={['2/3', '1/3']} pad="xsmall">
      <Box direction="row" justify="center">
        <Box justify="center" align="start" margin={{ left: 'xsmall' }}>
          <img src="./assets/sectionMMO.svg" alt="screenshot of MMO website page" />
        </Box>
        <Box justify="center" pad={{ left: 'large', top: 'large'}}>
          <img src="./assets/mmoSectionMini.svg" alt="screenshot of MMO website page, mobile version" />
        </Box>
      </Box>
      <Box justify="center" align="start" margin={{ right: 'large', top: 'large'}}>
        <Box>
          <Heading level={2} color={TextColor}>
            MMO.cat selling website
          </Heading>
        </Box>
        <Box width="491px" pad={{ bottom: 'small' }}>
          <Box pad={{ bottom: 'large' }}>
            <Text size="medium" color={textDark}>
              We provided full-stack development service
            </Text>
            <Text size="medium" color={textDark}>
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
