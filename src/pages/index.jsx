import React from 'react';
import { graphql } from 'gatsby';

import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { Layout } from '../components/Layout';
import { LetsStarted } from '../components/LetsStarted/LetsStarted';
import { SEO } from '../components/SEO';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { TeamSection } from '../components/TeamSection/TeamSection';
import { BoxLookingSection } from '../components/BoxLookingSection/BoxLookingSection';
import { MobileCase } from '../components/Work/MobileCase';
import { CaseWrapper } from '../components/Work/CaseWrapper';
import { WebCase } from '../components/Work/WebCase';

const IndexPage = ({ location, data }) => {
  const {
    meta,
    homeHero,
    team,
    looking,
    whatWeDo,
  } = data.homePage.edges[0].node.frontmatter;

  const GapNurseData = data.works.edges[0].node.frontmatter;
  const MMOdata = data.works.edges[1].node.frontmatter;

  return (
    <Layout location={location} title={meta.title}>
      <SEO title={meta.title} description={meta.description} />
      <SiteHeader />
      <HomeHeroSection
        title={homeHero.title}
        text={homeHero.text}
        withBackground
      />
      <CaseWrapper
        position="top right"
        withBackground
        firstColor="#f0f6f4"
        secondColor="#fff"
        sizePad="xlarge"
        urlImg="/assets/background-gapNurse.svg"
      >
        <MobileCase withBackground data={GapNurseData} />
      </CaseWrapper>
      <TeamSection title={team.title} text={team.text} />
      <CaseWrapper
        position="left top"
        withBackground
        justify="center"
        firstColor="#f0f6f4"
        secondColor="#fff"
        sizePad="xlarge"
        urlImg="/assets/mmoBackground.svg"
      >
        <WebCase data={MMOdata} withBackground />
      </CaseWrapper>
      <BoxLookingSection
        titleLooking={looking.title}
        textLooking={looking.text}
        titleWeDo={whatWeDo.title}
      />
      <LetsStarted />
      {/* <BlogSection withBackground /> */}
      <SiteFooter />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    homePage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home" } } }
    ) {
      edges {
        node {
          frontmatter {
            meta {
              title
              description
            }
            homeHero {
              title
              text
            }
            gapNurse {
              title
              text
            }
            team {
              title
              text
            }
            mmoCat {
              title
              text
            }
            looking {
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
