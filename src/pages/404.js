import React from "react"
import { graphql } from "gatsby"
import { Grommet } from "grommet";

import Layout from "../components/layout"
import SEO from "../components/Seo"
import { theme } from "../utils/theme"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Grommet theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Not Found" />
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
      </Grommet>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
