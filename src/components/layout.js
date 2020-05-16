import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"
// import Button from "../components/button"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`
            
            // maxWidth: rhythm(24),
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Header/>          
          <main>{children}</main>
        </div>
        <Footer/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
