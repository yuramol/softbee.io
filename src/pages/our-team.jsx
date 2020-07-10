import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { OurTeamHeroSection } from '../components/OurTeamHeroSection/OurTeamHeroSection';

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
      <OurTeamHeroSection withBackground />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;
