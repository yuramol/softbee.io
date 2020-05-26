import React from 'react';
import { Grommet } from 'grommet';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { theme } from '../utils/theme';
import HomeHeroSection from '../components/HomeHeroSection/HomeHeroSection';
import GapNurseSection from '../components/GapNurseSection/GapNurseSection';
import TeamSection from '../components/TeamSection/TeamSection';
import MMOSection from '../components/MMOSection/MMOSection';
import LookingSection from '../components/LookingSection/LookingSection';
import WhatWeDoSection from '../components/WhatWeDoSection/WhatWeDoSection';
import LetsStarted from '../components/LetsStarted/LetsStarted';

const IndexPage = ({ location }) => {
  const siteTitle = 'SoftBee';

  return (
    <Grommet theme={theme}>
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeHeroSection />
        <GapNurseSection />
        <TeamSection />
        <MMOSection />
        <LookingSection />
        <WhatWeDoSection />
        <LetsStarted />
      </Layout>
    </Grommet>
  );
};

export default IndexPage;
