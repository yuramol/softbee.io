import React from 'react';
import styled from 'styled-components';
import { Text as LibText } from 'grommet';

const getFontSize = size => {
  switch (size) {
    case 'medium':
      return '16px';
    case 'large':
      return '24px';
    case 2:
      return '100px';
    default:
      return '16px';
  }
};
const getLineHeight = size => {
  switch (size) {
    case 'medium':
      return '26px';
    case 'large':
      return '47px';
    default:
      return '';
  }
};

const StyledText = styled(LibText)`
  font-size: ${({ size }) => getFontSize(size)};
  line-height: ${({ size }) => getLineHeight(size)};
`;
export const Text = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledText {...props}>{children}</StyledText>
);
