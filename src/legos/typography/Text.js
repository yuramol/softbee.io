import React from "react";
import styled from "styled-components";
import { Text as LibText } from "grommet";
const getFontSize =(size)=> {
  switch (size) {
    case "medium":
      return '16px'
      break;
    case 2:
      return '100px'
      break;
    default:
      return '16px'
      break;
  }
};
const getlineHeight =(size)=> {
  switch (size) {
    case "medium":
      return '26px'
      break;
    case "large":
      return '47px'
      break;
    default:
      return ''
      break;
  }
};

const StyledText = styled(LibText)`
  font-size: ${({size}) => getFontSize(size)};
  line-height: ${({size}) => getlineHeight(size)};
`
export const Text = ({children, ...props})=> (
  <StyledText {...props}>
    {children}
  </StyledText>   
);