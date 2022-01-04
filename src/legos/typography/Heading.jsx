import React from 'react';
import styled from 'styled-components';
import { Heading as LibHeading } from 'grommet';

const StyledHeading = styled(LibHeading)`
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
`;

export const Heading = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledHeading fill {...props}>
    {children}
  </StyledHeading>
);
