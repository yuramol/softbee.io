import React from 'react';
import { Grommet, Box, Button, Grid } from 'grommet';

import { theme } from '../../utils/theme';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

class MMOSection extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
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
                <img
                  src="./assets/sectionMMO.svg"
                  alt="Gatsby Scene"
                />
              </Box>
              <Box justify="center" pad={{ left: 'xlarge', right: 'small' }}>
                <img 
                  src="./assets/mmoSectionMini.svg"
                  alt="Gatsby Scene"
                />
              </Box>
            </Box>
            <Box justify="center" align="start" margin={{ right: 'large' }}>
              <Box>
                <Heading level={2} color="#104065">
                  MMO.cat selling website
                </Heading>
              </Box>
              <Box width="491px" pad={{ bottom: 'small' }}>
                <Box pad={{ bottom: 'large' }}>
                  <Text size="medium" color="#104065">
                    We provided full-stack development service
                  </Text>
                  <Text size="medium" color="#104065">
                    for end-to-end websites of MMO.cat team
                  </Text>
                </Box>
                <Button
                  style={{ textDecorationLine: 'underline' }}
                  plain
                  label="See case study"
                  color="#25BBC5"
                  onClick={() => {}}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grommet>
    );
  }
}

export default MMOSection;
