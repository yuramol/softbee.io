import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { MobileCase } from '../components/Work/Mobile/MobileCase';
import { CaseWrapper } from '../components/Work/CaseWrapper';
import { WebCase } from '../components/Work/Web/WebCase';

const WorkPage = ({ location, data }) => {
  const { workPage, homePage } = data;

  const workFirstData = data.works.edges[0].node.frontmatter;
  const { meta, main } = workPage.edges[0].node.frontmatter;

  const works = data.works.edges.slice(1);

  let { toolchain } = workPage.edges[0].node.frontmatter;
  toolchain = toolchain.map(item => ({ id: Math.random() * 1000, ...item }));
  const { whatWeDo } = homePage.edges[0].node.frontmatter;

  return (
    <Layout location={location} title={meta.title} withBackground>
      <SiteHeader />
      <SEO title={meta.title} description={meta.description} />
      <WorkHeroSection
        subtitle={main.subtitle}
        textSecond={main.textSecond}
        whatWeDo={main.whatWeDo}
        withBackground
      />
      <CaseWrapper
        position="top right"
        firstColor="#f0f6f4"
        secondColor="#fff"
        justify="center"
        sizePad="xlarge"
      >
        {workFirstData.type === 'web' ? (
          <WebCase data={workFirstData} />
        ) : (
          <MobileCase data={workFirstData} />
        )}
      </CaseWrapper>
      <CaseWrapper
        position="left top"
        justify="center"
        firstColor="#f0f6f4"
        secondColor="#f0f6f4"
        sizePad="xlarge"
        urlImg="/assets/mmoBackground.svg"
      >
        <WhatWeDoSection title={whatWeDo.title} />
        <ToolchainSection toolchain={toolchain} />
      </CaseWrapper>
      {works.map((item, index) => {
        return (
          <CaseWrapper
            key={item.node.frontmatter.path}
            position={!index % 2 ? 'left top' : 'right top'}
            withBackground
            justify="center"
            firstColor={index % 2 ? '#f0f6f4' : '#fff'}
            secondColor="#f0f6f4"
            sizePad="xlarge"
            urlImg={
              !index % 2
                ? '/assets/mmoBackground.svg'
                : '/assets/mmoBackgroundMirror.svg'
            }
          >
            {item.node.frontmatter.type === 'web' ? (
              <WebCase
                isPosition={!!(index % 2)}
                data={item.node.frontmatter}
              />
            ) : (
              <MobileCase
                isPosition={!(index % 2)}
                data={item.node.frontmatter}
              />
            )}
          </CaseWrapper>
        );
      })}
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
              textSecond
              text
              whatWeDo {
                logo
                name
              }
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
            type
            path
            thumbnail
            thumbnailRetina
            thumbnailWebp
            thumbnailWebpRetina
            thumbnailSecond
            thumbnailSecondRetina
            thumbnailSecondWebp
            thumbnailSecondWebpRetina
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
