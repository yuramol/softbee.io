import React from 'react';
import { Link as LibLink } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledLink = styled(LibLink)`
  color: ${({ color }) => color};
`;

export const RouterLink = ({ to, children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

RouterLink.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
};

RouterLink.defaultProps = {
  color: '#25BBC5',
};
