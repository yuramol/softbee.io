import React from 'react';
import { Box, Grid } from 'grommet';

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
export const WorkHeroSection = () => (
  <Box
    height="695px"
    background={{
      size: 'small',
      position: 'right',
      image: 'url(./assets/background-work.svg)',
    }}
  >
    <Heading alignSelf="center" level={1} color="brand" wordBreak="normal">
      Work
    </Heading>
    <Grid columns={{ count: 2, size: 'auto' }} gap="small" fill="horizontal">
      <Box
        justify="center"
        align="start"
        pad={{ bottom: 'small', left: 'large' }}
      >
        <Box pad={{ bottom: 'medium' }}>
          <Heading level={2} color="brand" wordBreak="normal">
            How we work and what we do. And a bit of our favorite projects and
            the impact they have made.
          </Heading>
        </Box>

        <Box width="70%" pad={{ bottom: 'small' }}>
          <Text size="medium" color="brand">
            We work really well together but are awesome separately, too. Hire
            only what you need, we’ll build our team around your project.
          </Text>
        </Box>
        <Box width="70%" pad={{ bottom: 'large' }}>
          <Text size="medium" color="brand">
            From small HTML-template, to building entire applications, we’ve
            worked on projects of all sizes.
          </Text>
        </Box>
        <Box justify="center" align="center" height="60px" width="200px">
          <StyledButton label="How we work" fill color="accent-1" primary />
        </Box>
      </Box>
      <Box pad={{ left: '50%', top: '20%' }}>
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
