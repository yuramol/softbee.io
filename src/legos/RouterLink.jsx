import React, { useState } from 'react';
import { Link as LibLink } from 'gatsby';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';
import { hoveredLink } from '../utils/globalStyles';

const StyledLink = styled(LibLink)`
  transition: all 0.3s ease-in-out;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color, isActive, activeColor }) =>
    isActive ? activeColor : color};
  padding: ${({ padding }) => padding};
  ${({ disableUnderline }) =>
    disableUnderline &&
    css`
      text-decoration: none;
    `}
  ${({ activeColor }) => activeColor && hoveredLink(activeColor)}
  h4 {
    ${({ activeColor }) => activeColor && hoveredLink(activeColor)}
  }
  ${({ isActive, activeColor, isMobileNavigation }) =>
    isActive &&
    !isMobileNavigation &&
    css`
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${activeColor};
      }
    `}
`;

export const RouterLink = ({ to, children, icon, ...props }) => {
  const Icon = icon || null;

  const [isActive, setIsActive] = useState(false);

  const activeLink = ({ isCurrent }) => {
    setIsActive(isCurrent);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledLink isActive={isActive} getProps={activeLink} to={to} {...props}>
      {children}
      {Icon && <span> {Icon}</span>}
    </StyledLink>
  );
};

RouterLink.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string.isRequired,
  disableUnderline: PropTypes.bool,
  icon: PropTypes.func,
};

RouterLink.defaultProps = {
  color: theme.global.colors['accent-2'],
  disableUnderline: false,
  icon: null,
};
