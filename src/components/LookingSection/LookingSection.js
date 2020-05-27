import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { TextColor } from '../../utils/colors';

class LookingSection extends React.Component {
  render() {
    return (
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad="xlarge"
        gap="medium"
      >
        <Box
          direction="row"
          pad="small"
          justify="center"
          alignContent="center"
          height="414px"
          width="1160px"
          style={{
            boxShadow: '0px 0px 75px',
            color: '#F3F3F3',
            borderRadius: '55px',
          }}
          round
          gap="small"
        >
          <Box justify="center" pad={{ left: 'medium' }}>
            <img
              style={{ transform: 'rotate(-15.26deg)' }}
              src="./assets/gears.svg"
              alt="
              Image of a gear"
            />
          </Box>
          <Box
            style={{ textAlign: 'center' }}
            justify="center"
            margin={{ top: 'large', horizontal: 'medium' }}
          >
            <Heading
              level={2}
              color={TextColor}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Looking for an team willing to go the extra mile for you?
            </Heading>
            <Heading level={2} color={TextColor}>
              You're in the right place.
            </Heading>
          </Box>
          <Box justify="center" pad={{ right: 'medium' }}>
            <img src="./assets/arrow.svg" alt="Arrows" />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default LookingSection;
