import React from "react"
import styled from "styled-components"
import "normalize.css";

import { Box } from "grommet";
class Layout extends React.Component {
  render() {
    const {  children } = this.props
  
    return (
        <Wrapper>
          <Box background={{
            "size": "small",
            "position": "absolute",
            "image": "url(./backgroundHeader.svg)"}}> 
            
              <Box direction="row" justify="center" align="center" width={{"min": "350", "max": "1400"}}>
                <main>{children}</main>
              </Box>
            <Footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
          </Box>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
