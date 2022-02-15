import React from 'react';
import styled from 'styled-components';
import { Heading as LibHeading } from 'grommet';

const getFontSize = level => {
  switch (level) {
    case 1:
      return '1.875rem';
    case 2:
      return '1.5rem';
    case 3:
      return '1.2rem';
    default:
      return '1.25rem';
  }
};

const StyledHeading = styled(LibHeading)`
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  @media (max-width: 768px) {
    font-size: ${({ level }) => getFontSize(level)};
  }
`;

export const Heading = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledHeading fill {...props}>
    {children}
  </StyledHeading>
);
