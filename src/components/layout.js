import React from "react"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"
// import Button from "../components/button"
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
            "image": "url(./assets/backgroundHeader.svg)"}}> 
            <Header/>
              <Box direction="row" justify="center" align="center" width={{"min": "350", "max": "1400"}}>
                <main>{children}</main>
              </Box>
            <Footer/>
          </Box>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
