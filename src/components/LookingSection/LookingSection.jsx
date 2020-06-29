import React from 'react';
import { Box } from 'grommet';

import { Heading } from '../../legos/typography/Heading';

export const LookingSection = () => (
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
          alt="gear"
        />
      </Box>
      <Box
        style={{ textAlign: 'center' }}
        justify="center"
        margin={{ top: 'large', horizontal: 'medium' }}
      >
        <Heading
          level={2}
          color="brand"
          margin="xsmall"
          style={{ fontWeight: '600' }}
        >
          Looking for an team willing to go the extra mile for you?
        </Heading>
        <Heading level={2} color="brand">
          You&apos;re in the right place.
        </Heading>
      </Box>
      <Box justify="center" pad={{ right: 'medium' }}>
        <img src="./assets/arrow.svg" alt="Gatsby Scene" />
      </Box>
    </Box>
  </Box>
);
