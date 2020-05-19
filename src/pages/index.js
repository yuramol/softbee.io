import React from "react"
import { Grommet } from 'grommet';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { theme } from "../utils/theme"
import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection"
import  GapNurseSection  from "../components/GapNurseSection/GapNurseSection";
import  TeamSection  from "../components/TeamSection/TeamSection";
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
          <HomeHeroSection />
          <GapNurseSection />
          <TeamSection />
        </Layout>
      </Grommet>

    )
  }
}

export default IndexPage
