import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { StyledButton } from '../../legos/Button/Button';
import { Text } from '../../legos/typography/Text';

const skillItems = [
  'Branding',
  'Visual Design',
  'UI & interactions',
  'Frontend',
  'Backend',
  'Mobile apps',
];

export const WorkHeroSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const rowsCount = size === 'small' ? 2 : 1;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const textAlignVariant = isTabletOrMobile ? 'center' : 'start';
  const fontSizeVariant = isTabletOrMobile ? 4 : 2;
  const paddingVariant = isTabletOrMobile ? 'small' : 'medium';
  return (
    <Box
      background={
        withBackground
          ? {
              size: 'small',
              position: 'top right',
              image: 'url(./assets/background-gapNurse.svg)',
              color: '#F0F6F4',
            }
          : {
              color: '#F0F6F4',
            }
      }
    >
      <Heading alignSelf="center" level={1} color="brand" wordBreak="normal">
        Work
      </Heading>
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        rows={{ count: rowsCount, size: 'auto' }}
        pad={paddingVariant}
        fill="horizontal"
      >
        <Box justify="center" align={textAlignVariant}>
          <Box width="65%">
            <Heading
              level={fontSizeVariant}
              color="brand"
              textAlign={textAlignVariant}
              wordBreak="normal"
            >
              How we work and what we do. And a bit of our favorite projects and
              the impact they&apos;ve made.
            </Heading>
          </Box>

          <Box width="50%" pad={{ bottom: 'small' }}>
            <Text size="medium" color="brand">
              We work really well together but are awesome separately, too. Hire
              only what you need, we’ll build our team around your project.
            </Text>
          </Box>
          <Box width="50%" pad={{ bottom: 'large' }}>
            <Text size="medium" color="brand">
              From small HTML-template, to building entire applications, we’ve
              worked on projects of all sizes.
            </Text>
          </Box>
          <Box justify="center" align="center" height="60px" width="200px">
            <StyledButton label="How we work" fill color="accent-1" primary />
          </Box>
        </Box>
        <Box justify="end">
          <Heading level={2} color="text-white" wordBreak="normal">
            What we do?
          </Heading>
          {skillItems.map(skillItem => (
            <Text
              key={skillItem}
              margin="xsmall"
              size="xlarge"
              color="text-white"
            >
              {skillItem}
            </Text>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

WorkHeroSection.propTypes = {
  withBackground: PropTypes.bool,
};

WorkHeroSection.defaultProps = {
  withBackground: undefined,
};
