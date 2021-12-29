import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { Button as LibButton } from 'grommet';
import { theme } from '../../utils/theme';

export const StyledButton = styled(LibButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out; 
  font-weight: 600;
  border-radius: 0.625rem;
  color: ${({ colorText }) => colorText || theme.global.colors.brand};


  ${({ primary }) =>
    primary &&
    css`
    &:hover {
      background-color: ${theme.global.colors.brand};
      color: #fff;
      border-color: ${theme.global.colors.brand};
      box-shadow: none;
    `}
  }

  ${({ outline, disabled }) =>
    outline &&
    !disabled &&
    css`
    &:hover {
      background-color: ${theme.global.colors['accent-1']};
      color: ${theme.global.colors.brand};
      box-shadow: none;
    `}
  }
`;

export const Button = ({ ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...props} />;
};

StyledButton.propTypes = {
  colorText: string,
};

StyledButton.defaultProps = {
  color: 'accent-1',
};
