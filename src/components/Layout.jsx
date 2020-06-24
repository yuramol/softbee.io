import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

export const Layout = ({ children, withBackground }) => {
  return (
    <Grommet theme={theme}>
      <Box fill align="center">
        <Box
          background={
            withBackground
              ? {
                  size: 'small',
                  position: 'absolute',
                  image: 'url(./assets/backgroundHeader.svg)',
                  color: '#F0F6F4',
                }
              : {
                  size: 'small',
                  position: 'absolute',
                  image: 'url(./assets/backgroundHeader.svg)',
                }
          }
          width={{ max: '1400px' }}
        >
          {children}
        </Box>
      </Box>
    </Grommet>
  );
};

Layout.propTypes = {
  withBackground: PropTypes.bool,
};

Layout.defaultProps = {
  withBackground: undefined,
};
