import React from "react";
import styled from "styled-components";
import { Heading as LibHeading } from "grommet";
const getFontSize =(level)=> {
  switch (level) {
    case 1:
      return '54px'
      break;
    case 2:
      return '100px'
      break;
    default:
      return '16px'
      break;
  }
};

const getFontWeight =(level)=> {
  switch (level) {
    case 1:
      return '800'
      break;
    case 2:
      return '600'
      break;
    default:
      return '400'
      break;
  }
}
const StyledHeading= styled(LibHeading)`
  font-size: ${({level}) => getFontSize(level)};
  font-weight: ${({level}) => getFontWeight(level)};
`
export const Heading = ({children, ...props})=> (
  <StyledHeading {...props}>
    {children}
  </StyledHeading>   
);