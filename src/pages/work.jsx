import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { WorkItemSection } from '../components/Work/WorkItemSection';

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
        displayTwoImages={firstWork.displayTwoImages}
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
          displayTwoImages={frontmatter.displayTwoImages}
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
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            path
            displayTwoImages
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
