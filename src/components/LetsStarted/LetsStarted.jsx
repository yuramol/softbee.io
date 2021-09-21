import React from 'react';

import { Box, ResponsiveContext } from 'grommet';

import { Wizard } from '../Wizard';

export const LetsStarted = () => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === 'mobile';
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
