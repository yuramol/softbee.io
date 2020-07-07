import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { CaseGapNurse } from '../components/CaseGapNurse/CaseGapNurse';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

const PageCaseGapNurse = () => {
  return (
    <Layout>
      <SEO title="GapNurse Case" />
      <SiteHeader />
      <CaseGapNurse />
      <SiteFooter />
    </Layout>
  );
};

export default PageCaseGapNurse;
