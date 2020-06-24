import React from 'react';
import styled from 'styled-components';
import { Text as LibText } from 'grommet';

const getFontSize = size => {
  switch (size) {
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '18px';
    case 'xlarge':
      return '20px';
    case 'xxlarge':
      return '24px';
    default:
      return '16px';
  }
};
const getLineHeight = size => {
  switch (size) {
    case 'small':
      return '21px';
    case 'medium':
      return '24px';
    case 'large':
      return '27px';
    case 'xlarge':
      return '32px';
    case 'xxlarge':
      return '36px';
    default:
      return '24px';
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
