import { Link } from 'gatsby';
import { Header, Grid } from 'grommet';
import styled, { css } from 'styled-components';

import { theme } from '../../utils/theme';
import { RouterLink } from '../../legos/RouterLink';

const headerColor = theme.global.colors.brand;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ isActive, isSticky }) =>
    isActive && !isSticky ? headerColor : '#606060'};
`;

export const HeaderLink = styled(RouterLink)`
  color: ${({ isSticky }) => (isSticky ? '#fff' : undefined)};
`;

export const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  transition: background-color 0.15s ease-in-out;

  ${({ isSticky }) =>
    isSticky &&
    css`
      background-color: ${headerColor};
    `}

  ${({ isMobile }) =>
    isMobile &&
    css`
      background: ${headerColor};
      box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
    `}
`;

export const StyledHeaderWrapper = styled(Grid)`
  transition: padding 0.15s ease;
`;
