import React from 'react';
import { Box } from 'grommet';
import { string } from 'prop-types';
import { RouterLink } from '../../legos/RouterLink';
import { theme } from '../../utils/theme.js';

export const ButtonNextCase = ({ url }) => (
  <Box height="220px" align="center" justify="center">
    <RouterLink
      lineHeight="72px"
      fontSize="48px"
      hoveredColor={theme.global.colors['accent-2']}
      color={theme.global.colors.brand}
      to={url}
    >
      Next case
    </RouterLink>
  </Box>
);

ButtonNextCase.propTypes = {
  url: string.isRequired,
};
