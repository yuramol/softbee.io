import React from "react"
import { Link } from "gatsby"
import { Grommet } from 'grommet';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { theme } from "../utils/theme"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "SoftBee"

    return (
      <Grommet theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <h1 style={{fontFamily: 'HelveticaNeueCyr'}}>
            Hey people{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </h1>
          <p>Welcome to your new Gatsby website. You are on your home page.</p>
          <p>
            This starter comes out of the box with styled components and Gatsby's
            default starter blog running on Netlify CMS.
          </p>
          <p>Now go build something great!</p>
          <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link>
        </Layout>
      </Grommet>

    )
  }
}

export default IndexPage
