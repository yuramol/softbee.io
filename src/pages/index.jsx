import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { TeamSection } from '../components/TeamSection/TeamSection';
// import { MMOSection } from '../components/MMOSection/MMOSection';
// import { LookingSection } from '../components/LookingSection/LookingSection';
// import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
// import { LetsStarted } from '../components/LetsStarted/LetsStarted';

const siteTitle = 'SoftBee';
const keywords = [
  'softbee',
  'softbee.tech',
  'developers',
  'team of developers',
  'developers from Ukraine',
];

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} keywords={keywords} />
      <HomeHeroSection />
      <GapNurseSection />
      <TeamSection />
      {/* <MMOSection />
      <LookingSection />
      <WhatWeDoSection />
      <LetsStarted /> */}
    </Layout>
  );
};

export default IndexPage;
