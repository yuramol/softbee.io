import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const WhatWeDoSection = ({ title }) => {
  const { isSTablet, isSmall } = useBreakpoint();
  const isXSmall = useMediaQuery({ query: '(max-width: 400px)' });

  return (
    <Container>
      <Heading
        textAlign="center"
        level={2}
        margin={{ top: 'none', bottom: 'large' }}
        fontWeight="400"
      >
        {title}
      </Heading>
      <Grid
        columns={{ count: isSmall ? 2 : 4, size: 'auto' }}
        gap="medium"
        justify="center"
      >
        <Box direction="row" align="center" justify="center">
          <ImgFluid
            mobileWidth={isXSmall ? '25px' : isSTablet && '40px'}
            src="/assets/icons/research.svg"
            alt="Research"
          />
          <Heading
            level={3}
            fontWeight="700"
            margin={{ left: 'medium', vertical: 'none' }}
            size={isXSmall ? '1rem' : undefined}
          >
            Research
          </Heading>
        </Box>
        <Box direction="row" align="center" justify="center">
          <ImgFluid
            mobileWidth={isXSmall ? '25px' : isSTablet && '40px'}
            src="/assets/icons/design.svg"
            alt="Desing"
          />
          <Heading
            level={3}
            fontWeight="700"
            margin={{ left: 'medium', vertical: 'none' }}
            size={isXSmall ? '1rem' : undefined}
          >
            Design
          </Heading>
        </Box>
        <Box direction="row" align="center" justify="center">
          <ImgFluid
            mobileWidth={isXSmall ? '25px' : isSTablet && '40px'}
            src="/assets/icons/build.svg"
            alt="Arrows"
          />
          <Heading
            level={3}
            fontWeight="700"
            margin={{ left: 'medium', vertical: 'none' }}
            size={isXSmall ? '1rem' : undefined}
          >
            Build
          </Heading>
        </Box>
        <Box direction="row" align="center" justify="center">
          <ImgFluid
            mobileWidth={isXSmall ? '25px' : isSTablet && '40px'}
            src="/assets/icons/support.svg"
            alt="Small gears"
          />
          <Heading
            level={3}
            fontWeight="700"
            margin={{ left: 'medium', vertical: 'none' }}
            size={isXSmall ? '1rem' : undefined}
          >
            Support
          </Heading>
        </Box>
      </Grid>
    </Container>
  );
};

WhatWeDoSection.propTypes = {
  title: PropTypes.string.isRequired,
};
