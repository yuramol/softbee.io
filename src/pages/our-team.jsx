import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { OurTeamHeroSection } from '../components/OurTeamHeroSection/OurTeamHeroSection';
import { OurTeamAboutTeam } from '../components/OurTeamAboutTeam/OurTeamAboutTeam';
import { OurTeamWeAreSection } from '../components/OurTeamWeAreSection/OurTeamWeAreSection';
import { OurTeamFollowSection } from '../components/OurTeamFollowSection/OurTeamFollowSection';

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
      <OurTeamAboutTeam />
      <OurTeamWeAreSection />
      <OurTeamFollowSection />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;
