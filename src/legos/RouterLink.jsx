import React, { useState } from 'react';
import { Link as LibLink } from 'gatsby';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import { hoveredLink } from '../utils/globalStyles';

const StyledLink = styled(LibLink)`
  transition: color 0.3s ease-in-out;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color, isActive }) => (isActive ? 'red' : color)};
  padding: ${({ padding }) => padding};
  ${({ disableUnderline }) =>
    disableUnderline &&
    css`
      text-decoration: none;
    `}
  ${({ hoveredColor }) => hoveredColor && hoveredLink(hoveredColor)}
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
  disableUnderline: PropTypes.bool,
};

RouterLink.defaultProps = {
  color: theme.global.colors['accent-2'],
  disableUnderline: false,
};
