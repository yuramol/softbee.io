import React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { CaseGapNurse } from '../components/CaseGapNurse/CaseGapNurse';

const PageCaseGapNurse = () => {
  return (
    <Layout>
      <SEO title="GapNurse Case" />
      <CaseGapNurse />
    </Layout>
  );
};

export default PageCaseGapNurse;
