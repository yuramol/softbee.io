import React from "react"
import { Grommet, Box } from "grommet"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { theme } from "../utils/theme"
import WorkHeroSection from "../components/WorkHeroSection/WorkHeroSection"
import GapNurseSection from "../components/GapNurseSection/GapNurseSection"
class WorkPage extends React.Component {
  render() {
    const siteTitle = "SoftBee"

    return (
      <Grommet theme={theme}>
        <Box background={{ color: "#F0F6F4" }}>
          <Layout location={this.props.location} title={siteTitle}>
            <SEO
              title="Work"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <WorkHeroSection />
            <Box background={{ color: "#FFFFFF" }}>
              <GapNurseSection />
            </Box>
          </Layout>
        </Box>
      </Grommet>
    )
  }
}

export default WorkPage
