import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { SiteFooter } from '../components/Footer';

const WorkPage = ({ location, data }) => {
  const { workPage, homePage } = data;

  const { meta, main } = workPage.edges[0].node.frontmatter;

  let { toolchain } = workPage.edges[0].node.frontmatter;
  toolchain = toolchain.map(item => ({ id: Math.random() * 1000, ...item }));

  const { gapNurse, mmoCat, whatWeDo } = homePage.edges[0].node.frontmatter;

  return (
    <Layout location={location} title={meta.title} withBackground>
      <SiteHeader />
      <SEO title={meta.title} description={meta.description} />
      <WorkHeroSection
        title={main.title}
        subtitle={main.subtitle}
        text={main.text}
        whatWeDo={main.whatWeDo}
        withBackground
      />
      <GapNurseSection title={gapNurse.title} text={gapNurse.text} />
      <ToolchainSection toolchain={toolchain} />
      <MMOSection title={mmoCat.title} text={mmoCat.text} />
      <WhatWeDoSection title={whatWeDo.title} withBackground />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query {
    workPage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work" } } }
    ) {
      edges {
        node {
          frontmatter {
            meta {
              title
              description
            }
            main {
              title
              subtitle
              text
              whatWeDo
            }
            toolchain {
              logo
              name
            }
          }
        }
      }
    }
    homePage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home" } } }
    ) {
      edges {
        node {
          frontmatter {
            gapNurse {
              title
              text
            }
            mmoCat {
              title
              text
            }
            whatWeDo {
              title
            }
          }
        }
      }
    }
  }
`;
