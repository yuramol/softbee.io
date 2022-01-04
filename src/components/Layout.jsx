import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box, ResponsiveContext } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

import { LetsTalk } from './LetsTalk';
import { maxBreakpoints } from '../utils/useBreakpoints';

export const Layout = ({ children, withBackground }) => {
  const image = size =>
    maxBreakpoints('small', size)
      ? undefined
      : 'url(/assets/backgroundHeader.svg)';

  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            fill
            pad={{
              top: maxBreakpoints('small', size) ? '58px' : '98px',
            }}
            background={
              withBackground
                ? {
                    size: 'auto',
                    position: 'top left',
                    image: image(size),
                    color: '#f0f6f4',
                  }
                : {
                    size: maxBreakpoints('sTablet', size) ? '35%' : 'auto',
                    position: 'top left',
                    image: image(size),
                  }
            }
          >
            {children}
            <LetsTalk />
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
