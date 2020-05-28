import React from 'react';
import { Grommet, Box } from 'grommet';
import { Close } from 'grommet-icons';

import { SEO } from '../components/SEO';
import { RouterLink } from '../legos/RouterLink';
import { theme } from '../utils/theme';

const LetsTalk = () => {
  return (
    <Grommet full theme={theme}>
      <SEO title="All posts" />
      <Box background="brand" fill>
        <RouterLink to="/">
          <Close />
        </RouterLink>
      </Box>
    </Grommet>
  );
};

export default LetsTalk;
