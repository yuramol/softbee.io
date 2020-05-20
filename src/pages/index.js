import React from "react"
import { Grommet, Box } from 'grommet';

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { theme } from "../utils/theme"
import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection"
import  GapNurseSection  from "../components/GapNurseSection/GapNurseSection";
import  TeamSection  from "../components/TeamSection/TeamSection";
import  MMOSection  from "../components/MMOSection/MMOSection";
import  LookingSection  from "../components/LookingSection/LookingSection";
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
          <Box background={{ color: '#F0F6F4' }}>
          <GapNurseSection />
          </Box>
          <TeamSection />
          <MMOSection />
          <LookingSection />
        </Layout>
      </Grommet>

    )
  }
}

export default IndexPage
