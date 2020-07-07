import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
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
      <WorkHeroSection withBackground />
      <GapNurseSection />
      <ToolchainSection />
      <MMOSection />
      <WhatWeDoSection withBackground />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;
