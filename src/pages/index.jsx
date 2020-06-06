import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { TeamSection } from '../components/TeamSection/TeamSection';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { LookingSection } from '../components/LookingSection/LookingSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { LetsStarted } from '../components/LetsStarted/LetsStarted';
import { BlogSection } from '../components/BlogSection/BlogSection';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

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
      <Header />
      <SEO title={siteTitle} keywords={keywords} />
      <HomeHeroSection />
      <GapNurseSection withBackground />
      <TeamSection />
      <MMOSection withBackground />
      <LookingSection />
      <WhatWeDoSection />
      <LetsStarted />
      <BlogSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
