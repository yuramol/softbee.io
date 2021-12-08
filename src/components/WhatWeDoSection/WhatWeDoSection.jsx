import React from 'react';

import PropTypes from 'prop-types';

import { Box, ResponsiveContext, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import Container from '../Layout/Container';

export const WhatWeDoSection = ({ title, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 2 : 4;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tablet', size);
  const marginVariant = isTablet ? 'none' : 'xsmall';
  const headerLevel = isMobile ? 4 : 2;

  return (
    <Box
      height={{ min: '330px' }}
      justify="center"
      background={
        withBackground
          ? {
              color: '#f0f6f4',
            }
          : undefined
      }
    >
      <Container
        justify="center"
        align="center"
        pad={isMobile ? { horizontal: 'large', vertical: 'xlarge' } : 'large'}
        gap="medium"
      >
        <Box justify="center" margin={{ horizontal: 'medium' }}>
          <Heading
            textAlign="center"
            level={headerLevel}
            margin={{ top: 'none' }}
            color="brand"
          >
            {title}
          </Heading>
        </Box>
        {isMobile || (
          <Grid columns={{ count: columnsCount, size: 'auto' }}>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/research.svg" alt="Research" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Research
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box
                pad={isTablet ? { left: 'medium', right: 'small' } : 'small'}
              >
                <img src="/assets/Desing.svg" alt="Desing" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Design
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/Build.svg" alt="Arrows" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Build
              </Heading>
            </Box>
            <Box
              direction="row"
              align="center"
              pad={isTablet ? undefined : { right: 'large' }}
            >
              <Box pad="small">
                <img src="/assets/gearSmall.svg" alt="Small gears" />
              </Box>
              <Heading
                level={3}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Support
              </Heading>
            </Box>
          </Grid>
        )}
        {isMobile && (
          <Grid columns={{ count: columnsCount, size: 'auto' }} gap="medium">
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad="small">
                <img src="/assets/research.svg" alt="Research" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Research
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad={{ right: 'medium', left: 'small', vertical: 'small' }}>
                <img src="/assets/Desing.svg" alt="Desing" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Design
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad={{ right: 'medium', left: 'small', vertical: 'small' }}>
                <img src="/assets/Build.svg" alt="Arrows" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Build
              </Heading>
            </Box>
            <Box direction="row" align="center" justify="start" pad="medium">
              <Box pad="small">
                <img src="/assets/gearSmall.svg" alt="Small gears" />
              </Box>
              <Heading
                level={6}
                color="brand"
                margin={marginVariant}
                fontWeight="600"
              >
                Support
              </Heading>
            </Box>
          </Grid>
        )}
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
