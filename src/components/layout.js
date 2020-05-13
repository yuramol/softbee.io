import React from "react"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const {  children } = this.props
  
    return (
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: '900px',
            }}
          >
            <header/>
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
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
