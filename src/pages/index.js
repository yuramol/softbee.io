import React from "react"
import { Grommet } from 'grommet';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../utils/theme"
import SectionHero from "../pages/home/sectionHeader"
import  SectionTwo  from "../pages/home/sectionTwo";
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
          <SectionHero />
          <SectionTwo />
        </Layout>
      </Grommet>

    )
  }
}

export default IndexPage
