import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box, ResponsiveContext } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

export const Layout = ({ children, withBackground }) => {
  const image = size =>
    size === 'small' ? undefined : 'url(/assets/backgroundHeader.svg)';

  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            fill
            margin={{ top: size === 'small' ? 'xlarge' : 'none' }}
            background={
              withBackground
                ? {
                    size: 'small',
                    position: 'absolute',
                    image: image(size),
                    color: '#F0F6F4',
                  }
                : {
                    size: 'small',
                    position: 'absolute',
                    image: image(size),
                  }
            }
            width={{ max: '1400px' }}
          >
            {children}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

Layout.propTypes = {
  withBackground: PropTypes.bool,
};

Layout.defaultProps = {
  withBackground: undefined,
};
