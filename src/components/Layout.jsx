import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grommet, Box } from 'grommet';

import 'normalize.css';
import { theme } from '../utils/theme';

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

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
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
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
