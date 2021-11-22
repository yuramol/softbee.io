import React, { useState } from 'react';
import { Link as LibLink } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme } from '../utils/theme';

const StyledLink = styled(LibLink)`
  color: ${({ color, isActive }) => (isActive ? 'red' : color)};
  padding: ${({ padding }) => padding};
`;

export const RouterLink = ({ to, children, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const activeLink = ({ isCurrent }) => {
    setIsActive(isCurrent);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledLink isActive={isActive} getProps={activeLink} to={to} {...props}>
      {children}
    </StyledLink>
  );
};

RouterLink.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
};

RouterLink.defaultProps = {
  color: theme.global.colors['accent-2'],
};
