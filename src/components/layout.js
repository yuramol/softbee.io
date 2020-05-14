import React from "react"
import styled from "styled-components"
import "normalize.css";

import {Box, Button, Header} from "grommet";
import { StyledButton } from "./styled";
class Layout extends React.Component {
  render() {
    const {  children } = this.props
  
    return (
        <Wrapper>
          <Box background={{
            "size": "small",
            "position": "absolute",
            "image": "url(./backgroundHeader.svg)"}}> 
            <Header justify="end" pad={{"horizontal": "150px",}}>
              <Box direction="row" gap="medium" margin="small" align="center">
                <Button plain label="Work" onClick={() => {}} margin="medium" />
                <Button plain label="Our team" onClick={() => {}} margin="medium" />
                <Button plain label="Blog" href="/blog/" margin="medium" />
              <Box
                justify="center"
                align="center"
                height="50px"
                width="194px">
                <StyledButton label="Let’s talk" fill color="#F5D040"icon="👋"/>
              </Box>
              </Box>
            </Header>
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
