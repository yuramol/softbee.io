import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
// import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { SiteHeader } from '../components/Header';
// import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { SiteFooter } from '../components/Footer';

const siteTitle = 'SoftBee';
const keywords = [
  'softbee',
  'softbee.tech',
  'developers',
  'team of developers',
  'developers from Ukraine',
];

const WorkPage = ({ location }) => {
  return (
    <Layout location={location} title={siteTitle} withBackground>
      <SiteHeader />
      <SEO title={siteTitle} keywords={keywords} />
      {/* <WorkHeroSection /> */}
      <GapNurseSection />
      {/* <ToolchainSection /> */}
      <WhatWeDoSection />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;
