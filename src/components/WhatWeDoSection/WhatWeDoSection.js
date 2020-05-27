import React from 'react';
import { Box } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { TextColor } from '../../utils/colors';

class WhatWeDoSection extends React.Component {
  render() {
    return (
      <Box justify="center" align="center" pad="large" gap="medium">
        <Box
          style={{ textAlign: 'center' }}
          justify="center"
          margin={{ top: 'large', horizontal: 'medium' }}
        >
          <Heading level={2} color={TextColor}>
            What we do?
          </Heading>
        </Box>
        <Box direction="row-responsive">
          <Box
            direction="row-responsive"
            align="center"
            pad={{ right: 'large' }}
          >
            <Box pad="small">
              <img src="./assets/research.svg" alt="Icon research" />
            </Box>
            <Heading
              level={3}
              color={TextColor}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Research
            </Heading>
          </Box>
          <Box
            direction="row-responsive"
            align="center"
            pad={{ right: 'large' }}
          >
            <Box pad="small">
              <img src="./assets/Desing.svg" alt="Icon pencil" />
            </Box>
            <Heading
              level={3}
              color={TextColor}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Design
            </Heading>
          </Box>
          <Box
            direction="row-responsive"
            align="center"
            pad={{ right: 'large' }}
          >
            <Box pad="small">
              <img src="./assets/Build.svg" alt="Arrows" />
            </Box>
            <Heading
              level={3}
              color={TextColor}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Build
            </Heading>
          </Box>
          <Box
            direction="row-responsive"
            align="center"
            pad={{ right: 'large' }}
          >
            <Box pad="small">
              <img src="./assets/gearSmall.svg" alt="Small gears" />
            </Box>
            <Heading
              level={3}
              color={TextColor}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Support
            </Heading>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default WhatWeDoSection;
