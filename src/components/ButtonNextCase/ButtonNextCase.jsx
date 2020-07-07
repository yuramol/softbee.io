import React from 'react';
import { Box } from 'grommet';
import { RouterLink } from '../../legos/RouterLink';

export const ButtonNextCase = () => (
  <Box
    height="220px"
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RouterLink
      style={{
        fontSize: '48px',
        lineHeight: '56px',
      }}
      to="next-case"
    >
      Next case
    </RouterLink>
  </Box>
);
