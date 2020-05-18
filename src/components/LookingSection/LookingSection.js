import React from 'react';
import { Grommet, Box, Grid } from 'grommet';

import { theme } from '../../utils/theme';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { StyledButton } from '../../legos/Button/Button';

class LookingSection extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
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
                alt="Gatsby Scene"
              />
            </Box>
            <Box
              style={{ textAlign: 'center' }}
              justify="center"
              margin={{ top: 'large', horizontal: 'medium' }}
            >
              <Heading
                level={2}
                color="#104065"
                margin="xsmall"
                style={{ fontWeight: '600' }}
              >
                Looking for an team willing to go the extra mile for you?
              </Heading>
              <Heading level={2} color="#104065">
                You're in the right place.
              </Heading>
            </Box>
            <Box justify="center" pad={{ right: 'medium' }}>
              <img style={{}} src="./assets/arrow.svg" alt="Gatsby Scene" />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default LookingSection;
