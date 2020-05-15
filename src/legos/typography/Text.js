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

const StyledText = styled(LibText)`
  font-size: ${({size}) => getFontSize(size)};
`
export const Text = ({children, ...props})=> (
  <StyledText {...props}>
    {children}
  </StyledText>   
);