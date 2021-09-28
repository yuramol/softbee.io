import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { WorkItemSection } from '../components/Work/WorkItemSection';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { SiteFooter } from '../components/Footer';

const WorkPage = ({ location, data }) => {
  const { workPage, homePage, works } = data;

  const firstWork = works.edges[0].node.frontmatter;
  const otherWorks = works.edges.slice(1);

  const { meta, main } = workPage.edges[0].node.frontmatter;

  let { toolchain } = workPage.edges[0].node.frontmatter;
  toolchain = toolchain.map(item => ({ id: Math.random() * 1000, ...item }));

  const { whatWeDo } = homePage.edges[0].node.frontmatter;

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
      <WorkItemSection
        path={firstWork.path}
        title={firstWork.preview.title}
        text={firstWork.preview.text}
        thumbnail={firstWork.thumbnail}
        thumbnailSecond={firstWork.thumbnailSecond}
      />
      <ToolchainSection toolchain={toolchain} />
      {otherWorks.map(({ node: { frontmatter } }, index) => (
        <WorkItemSection
          key={frontmatter.path}
          path={frontmatter.path}
          title={frontmatter.preview.title}
          text={frontmatter.preview.text}
          thumbnail={frontmatter.thumbnail}
          thumbnailSecond={frontmatter.thumbnailSecond}
          reversedGrid={index % 2 === 0}
        />
      ))}
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
    works: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "workItem" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            thumbnail
            thumbnailSecond
            preview {
              title
              text
            }
          }
        }
      }
    }
  }
`;
