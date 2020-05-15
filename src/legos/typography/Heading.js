import React from "react";
import styled from "styled-components";
import { Heading as LibHeading } from "grommet";

const getFontSize =(level)=> {
  switch (level) {
    case 1:
      return '54px'
      break;
    case 2:
      return '40px'
      break;
    case 5:
      return '16px'
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
      return '400'
      break;
    default:
      return '400'
      break;
  }
};

const getlineHeight =(level)=> {
  switch (level) {
    case 1:
      return '66px'
      break;
    case 2:
      return '47px'
      break;
    default:
      return ''
      break;
  }
};

const StyledHeading = styled(LibHeading)`
  font-size: ${({level}) => getFontSize(level)};
  font-weight: ${({level}) => getFontWeight(level)};
  line-height: ${({level}) => getlineHeight(level)};
`
export const Heading = ({children, ...props})=> (
  <StyledHeading {...props}>
    {children}
  </StyledHeading>   
);