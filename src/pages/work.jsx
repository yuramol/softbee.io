import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { SiteHeader } from '../components/Header';
import { ToolchainSection } from "../components/ToolchainSection/ToolchainSection"
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
    <Layout location={location} title={siteTitle}>
      <SiteHeader />
      <SEO title={siteTitle} keywords={keywords} />
      <WorkHeroSection withBackground />            
      <GapNurseSection />            
      <ToolchainSection withBackground />
      <WhatWeDoSection />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;