import React from 'react';
import styled from 'styled-components';
import { Text as LibText } from 'grommet';

const StyledText = styled(LibText)`
  line-height: ${({ lineHeight }) => lineHeight};
  white-space: ${({ whiteSpace }) => whiteSpace};
  padding: ${({ padding }) => padding};
`;
export const Text = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledText {...props}>{children}</StyledText>
);
