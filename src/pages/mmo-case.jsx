import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { WorkCaseHero } from '../components/Work/WorkCaseHero';

const siteTitle = 'SoftBee';

const PageCaseMMO = () => {
  return (
    <Layout title={siteTitle}>
      <SEO title="MMO.CAT Case" />
      <SiteHeader />
      <WorkCaseHero />

      <SiteFooter />
    </Layout>
  );
};

export default PageCaseMMO;
