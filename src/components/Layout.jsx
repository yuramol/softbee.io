import React from 'react';
import PropTypes from 'prop-types';
import { Grommet, Box, ResponsiveContext } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

import { LetsTalk } from './LetsTalk';
import { maxBreakpoints } from '../utils/useBreakpoints';
import { GlobalStyle } from '../utils/globalStyles';

export const Layout = ({ children, withBackground }) => {
  const image = size =>
    maxBreakpoints('small', size)
      ? undefined
      : 'url(/assets/backgroundHeader.svg)';

  return (
    <Grommet theme={theme}>
      <GlobalStyle />
      <ResponsiveContext.Consumer>
        {size => (
          <Box align="center">
            <Box
              fill
              pad={{
                top: maxBreakpoints('small', size) ? '70px' : 'none',
              }}
              background={
                withBackground
                  ? {
                      size: 'small',
                      position: 'absolute',
                      image: image(size),
                      color: '#f0f6f4',
                    }
                  : {
                      size: 'small',
                      position: 'absolute',
                      image: image(size),
                    }
              }
            >
              {children}
              <LetsTalk />
            </Box>
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
