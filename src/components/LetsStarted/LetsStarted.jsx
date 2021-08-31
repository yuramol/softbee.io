import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box } from 'grommet';

import { Wizard } from '../Wizard';

export const LetsStarted = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={paddingVariant}
      gap="medium"
    >
      <Wizard style={{ maxWidth: '1030px' }} />
    </Box>
  );
};
