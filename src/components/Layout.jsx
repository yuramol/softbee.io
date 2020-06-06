import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grommet, Box } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

export const Layout = ({ children}) => {
  return (
    <Grommet theme={theme}>
      <Box fill align="center">
        <Box          
          width={{ max: '1400px' }}
        >
          {children}
        </Box>
      </Box>
    </Grommet>
  );
};
