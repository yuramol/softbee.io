import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import { Wizard } from '../Wizard/Wizard';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const LetsStarted = () => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('mobile', size);
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
      <Wizard maxWidth="1030px" />
    </Box>
  );
};
