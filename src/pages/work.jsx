import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { ToolchainSection } from '../components/ToolchainSection/ToolchainSection';
import { WorkHeroSection } from '../components/WorkHeroSection/WorkHeroSection';
import { MobileCase } from '../components/Work/Mobile/MobileCase';
import { CaseWrapper } from '../components/Work/CaseWrapper';
import { WebCase } from '../components/Work/Web/WebCase';

const getPosition = ({ index }) => {
  if (index % 2) {
    return 'top right';
  }
  return 'left top';
};

const getPositionImg = ({ index }) => {
  const newIndex = index + 1;
  if (newIndex % 2) {
    return '/assets/mmoBackground.svg';
  }
  return '/assets/mmoBackgroundMirror.svg';
};

const getColor = ({ index }) => {
  if (index % 2) {
    return '#f0f6f4';
  }
  return '#fff';
};

const WorkPage = ({ location, data }) => {
  const { workPage } = data;
  const filterFirstData = data.works.edges.filter(
    item => item.node.frontmatter.order === 1,
  );
  const workFirstData = filterFirstData[0].node.frontmatter;
  const { meta, main } = workPage.edges[0].node.frontmatter;
  const works = data.works.edges.filter(
    item => item.node.frontmatter.order !== 1,
  );

  let { toolchain } = workPage.edges[0].node.frontmatter;
  toolchain = toolchain.map(item => ({ id: Math.random() * 1000, ...item }));

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
        <ToolchainSection toolchain={toolchain} />
      </CaseWrapper>
      {works.map((item, index) => {
        return (
          <CaseWrapper
            key={item.node.frontmatter.path}
            position={getPosition({ index })}
            withBackground
            justify="center"
            firstColor={getColor({ index })}
            secondColor="#f0f6f4"
            sizePad="xlarge"
            urlImg={getPositionImg({ index })}
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
    ) {
      edges {
        node {
          frontmatter {
            order
            type
            path
            imagePreview {
              image
              imageRetina
              imageSecond
              imageSecondRetina
            }
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
