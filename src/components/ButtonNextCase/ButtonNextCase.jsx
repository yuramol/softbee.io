import React from 'react';
import { Box } from 'grommet';
import { string } from 'prop-types';
import { RouterLink } from '../../legos/RouterLink';

export const ButtonNextCase = ({ url }) => (
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
      to={url}
    >
      Next case
    </RouterLink>
  </Box>
);

ButtonNextCase.propTypes = {
  url: string.isRequired,
};
