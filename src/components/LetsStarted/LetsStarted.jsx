import React from 'react';
import { Box } from 'grommet';

import Container from '../Layout/Container';
import { Wizard } from '../Wizard';

export const LetsStarted = () => {
  return (
    <Container>
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad={{ vertical: 'xlarge' }}
        gap="medium"
      >
        <Wizard maxWidth="1000px" />
      </Box>
    </Container>
  );
};
