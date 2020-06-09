import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { StyledButton } from '../../legos/Button/Button';
import { Text } from '../../legos/typography/Text';
// import BackgroundImage from "..//..//..//static/assets/background-work.svg"

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
    <Heading alignSelf="center" level={1} color="#104065" wordBreak="normal">
      Work
    </Heading>
    <Grid columns={{ count: 2, size: 'auto' }} gap="small" fill="horizontal">
      <Box
        justify="center"
        align="start"
        pad={{ bottom: 'small', left: 'large' }}
      >
        <Box pad={{ bottom: 'medium' }}>
          <Heading level={2} color="#104065" wordBreak="normal">
            How we work and what we do. And a bit of our favorite projects and
            the impact they have made.
          </Heading>
        </Box>

        <Box width="70%" pad={{ bottom: 'small' }}>
          <Text size="medium" color="#104065">
            We work really well together but are awesome separately, too. Hire
            only what you need, we’ll build our team around your project.
          </Text>
        </Box>
        <Box width="70%" pad={{ bottom: 'large' }}>
          <Text size="medium" color="#104065" style={{ lineHeight: '24px' }}>
            From small HTML-template, to building entire applications, we’ve
            worked on projects of all sizes.
          </Text>
        </Box>
        <Box justify="center" align="center" height="60px" width="200px">
          <StyledButton label="How we work" fill color="#F5D040" primary />
        </Box>
      </Box>
      <Box pad={{ left: '50%', top: '20%' }}>
        <Heading level={2} color="#FFFFFF" wordBreak="normal">
          What we do?
        </Heading>
        {skillItems.map(props => (
          <Text
            margin="xsmall"
            size="xlarge"
            color="#FFFFFF"
            style={{ lineHeight: '24px' }}
          >
            {props}
          </Text>
        ))}
      </Box>
    </Grid>
  </Box>
);
