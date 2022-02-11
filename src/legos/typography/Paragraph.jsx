import React from 'react';
import styled from 'styled-components';
import { Paragraph as LibParagraph } from 'grommet';

const StyledParagraph = styled(LibParagraph)`
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  white-space: ${({ whiteSpace }) => whiteSpace};
  text-align: ${({ textAlign }) => textAlign};
  align-self: ${({ alignSelf }) => alignSelf};
`;
export const Paragraph = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledParagraph fill responsive {...props}>
    {children}
  </StyledParagraph>
);
