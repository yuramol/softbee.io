import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { CaseMMO } from '../components/CaseMMO/CaseMMO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

const siteTitle = 'SoftBee';

const PageCaseMMO = () => {
  return (
    <Layout title={siteTitle}>
      <SEO title="MMO.CAT Case" />
      <SiteHeader />
      <CaseMMO />
      <SiteFooter />
    </Layout>
  );
};

export default PageCaseMMO;
