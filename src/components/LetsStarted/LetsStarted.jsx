import React from 'react';
import { Box } from 'grommet';

import Container from '../Layout/Container';
import { Wizard } from '../Wizard';

export const LetsStarted = () => {
  return (
    <Container>
      <Box justify="center" direction="row" pad={{ bottom: 'xlarge' }}>
        <Wizard maxWidth="1000px" />
      </Box>
    </Container>
  );
};
