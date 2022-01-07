import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { useMediaQuery } from 'react-responsive';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const WhatWeDoSection = ({ title, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isTablet = maxBreakpoints('sTablet', size);
  const isMobile = maxBreakpoints('small', size);
  const isXsmall = useMediaQuery({ query: '(max-width: 400px)' });

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      background={
        withBackground
          ? {
              color: '#f0f6f4',
            }
          : undefined
      }
    >
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
          columns={{ count: isMobile ? 2 : 4, size: 'auto' }}
          gap="medium"
          justify="center"
        >
          <Box direction="row" align="center" justify="center">
            <ImgFluid
              mobileWidth={isXsmall ? '25px' : isTablet && '40px'}
              src="/assets/icons/research.svg"
              alt="Research"
            />
            <Heading
              level={3}
              fontWeight="700"
              margin={{ left: 'medium', vertical: 'none' }}
              size={isXsmall ? '1rem' : undefined}
            >
              Research
            </Heading>
          </Box>
          <Box direction="row" align="center" justify="center">
            <ImgFluid
              mobileWidth={isXsmall ? '25px' : isTablet && '40px'}
              src="/assets/icons/design.svg"
              alt="Desing"
            />
            <Heading
              level={3}
              fontWeight="700"
              margin={{ left: 'medium', vertical: 'none' }}
              size={isXsmall ? '1rem' : undefined}
            >
              Design
            </Heading>
          </Box>
          <Box direction="row" align="center" justify="center">
            <ImgFluid
              mobileWidth={isXsmall ? '25px' : isTablet && '40px'}
              src="/assets/icons/build.svg"
              alt="Arrows"
            />
            <Heading
              level={3}
              fontWeight="700"
              margin={{ left: 'medium', vertical: 'none' }}
              size={isXsmall ? '1rem' : undefined}
            >
              Build
            </Heading>
          </Box>
          <Box direction="row" align="center" justify="center">
            <ImgFluid
              mobileWidth={isXsmall ? '25px' : isTablet && '40px'}
              src="/assets/icons/support.svg"
              alt="Small gears"
            />
            <Heading
              level={3}
              fontWeight="700"
              margin={{ left: 'medium', vertical: 'none' }}
              size={isXsmall ? '1rem' : undefined}
            >
              Support
            </Heading>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

WhatWeDoSection.propTypes = {
  title: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

WhatWeDoSection.defaultProps = {
  withBackground: undefined,
};
