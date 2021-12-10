import React from 'react';
import styled from 'styled-components';
import { Heading as LibHeading } from 'grommet';

const getFontSize = level => {
  switch (level) {
    case 1:
      return '54px';
    case 2:
      return '40px';
    case 3:
      return '30px';
    case 4:
      return '36px';
    case 5:
      return '24px';
    case 6:
      return '20px';
    default:
      return '16px';
  }
};

const getFontWeight = level => {
  switch (level) {
    case 1:
      return '800';
    case 2:
      return '300';
    case 3:
      return '300';
    case 4:
      return '300';
    default:
      return '400';
  }
};

const getLineHeight = level => {
  switch (level) {
    case 1:
      return '66px';
    case 2:
      return '47px';
    case 3:
      return '30px';
    case 4:
      return '40px';
    default:
      return '20px';
  }
};

const StyledHeading = styled(LibHeading)`
  font-size: ${({ level, fontSize }) => fontSize || getFontSize(level)};
  font-weight: ${({ fontWeight, level }) => fontWeight || getFontWeight(level)};
  line-height: ${({ lineHeight, level }) => lineHeight || getLineHeight(level)};
`;

export const Heading = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledHeading {...props}>{children}</StyledHeading>
);
