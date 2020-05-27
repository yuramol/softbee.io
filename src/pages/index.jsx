import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import HomeHeroSection from '../components/HomeHeroSection/HomeHeroSection';
import GapNurseSection from '../components/GapNurseSection/GapNurseSection';
import TeamSection from '../components/TeamSection/TeamSection';
import MMOSection from '../components/MMOSection/MMOSection';
import LookingSection from '../components/LookingSection/LookingSection';
import WhatWeDoSection from '../components/WhatWeDoSection/WhatWeDoSection';
import LetsStarted from '../components/LetsStartedSection/LetsStarted';
import AboutBlogSection from '../components/BlogSection/BlogSection';

const IndexPage = ({ location }) => {
  const siteTitle = 'SoftBee';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <HomeHeroSection />
      <GapNurseSection />
      <TeamSection />
      <MMOSection />
      <LookingSection />
      <WhatWeDoSection />
      <LetsStarted />
      <AboutBlogSection />
    </Layout>
  );
};

export default IndexPage;
