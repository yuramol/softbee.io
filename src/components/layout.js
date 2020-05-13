import React from "react"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: "900px",
          }}
        >
          <header />
          <main>{children}</main>
        </div>        
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
export default Layout
