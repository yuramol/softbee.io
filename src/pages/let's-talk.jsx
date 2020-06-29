import React from 'react';
import { Grommet, Box } from 'grommet';
import { Close } from 'grommet-icons';

import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { Heading } from '../legos/typography/Heading';
import { theme } from '../utils/theme';

const LetsTalk = () => {
  return (
    <Grommet full theme={theme}>
      <SEO title="Let's talk" />
      <Box background="brand" fill>
        <RouterLink to="/">
          <Close />
        </RouterLink>
        <Heading level={2} color="white" margin="xsmall">
          Hey! Let’s get started. We’re SoftBee, and you are? &#128075;
        </Heading>
      </Box>
    </Grommet>
  );
};

export default LetsTalk;
