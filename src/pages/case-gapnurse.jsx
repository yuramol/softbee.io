import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { CaseGapNurse } from '../components/CaseGapNurse/CaseGapNurse';

const siteTitle = 'SoftBee';

const PageCaseGapNurse = () => {
  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <CaseGapNurse />
    </Layout>
  );
};

export default PageCaseGapNurse;
