import React from "react"
import styled from "styled-components"
import { Text as LibText } from "grommet"
const getFontSize = size => {
  switch (size) {
    case "medium":
      return "16px"
      break
    case "large":
      return "18px"
      break
    case "xlarge":
      return "20px"
      break
    case "xxlarge":
      return "48px"
      break
    case 2:
      return "100px"
      break
    default:
      return "16px"
      break
  }
}

const getLineHeight = size => {
  switch (size) {
    case "medium":
      return "26px"
      break
    case "large":
      return "27px"
      break
    case "xlarge":
      return "36px"
      break
    case "xxlarge":
      return "56px"
      break
    default:
      return "25px"
      break
  }
}

const StyledText = styled(LibText)`
  font-size: ${({size}) => getFontSize(size)};
  line-height: ${({size}) => getLineHeight(size)};
`
export const Text = ({children, ...props})=> (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledText {...props}>{children}</StyledText>   
);
