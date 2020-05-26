import React from 'react';
import styled from 'styled-components';
import { Button as LibButton } from 'grommet';

export const StyledButton = styled(LibButton)`
  flex-direction: row-reverse;
  border-radius: 10px;
`;

export const Button = ({ ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...props} />;
};
