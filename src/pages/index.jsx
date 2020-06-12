import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
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
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} keywords={keywords} />
      <HomeHeroSection />
      <GapNurseSection withBackground={!isMobile} />
      <TeamSection />
      {/* <MMOSection />
      <LookingSection />
      <WhatWeDoSection />
      <LetsStarted /> */}
    </Layout>
  );
};

export default IndexPage;
