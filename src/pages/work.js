import React from "react"
import { Grommet } from 'grommet';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { theme } from "../utils/theme"
class WorkPage extends React.Component {
  render() {
    const siteTitle = "SoftBee"

    return (
      <Grommet theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Work"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />          
        </Layout>
      </Grommet>

    )
  }
}

export default WorkPage
