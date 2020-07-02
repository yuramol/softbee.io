import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { CaseMMO } from '../components/CaseMMO/CaseMMO';

const siteTitle = 'SoftBee';

const PageCaseMMO = () => {
  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <CaseMMO />
    </Layout>
  );
};

export default PageCaseMMO;