import React from 'react';
import { graphql } from 'gatsby';

import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { Layout } from '../components/Layout';
import { LetsStarted } from '../components/LetsStarted/LetsStarted';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { SEO } from '../components/SEO';
import { SiteFooter } from '../components/Footer';
import { SiteHeader } from '../components/Header';
import { TeamSection } from '../components/TeamSection/TeamSection';
import { BoxLookingSection } from '../components/BoxLookingSection/BoxLookingSection';

const IndexPage = ({ location, data }) => {
  const {
    meta,
    homeHero,
    gapNurse,
    team,
    mmoCat,
    looking,
    whatWeDo,
  } = data.homePage.edges[0].node.frontmatter;

  return (
    <Layout location={location} title={meta.title}>
      <SEO title={meta.title} description={meta.description} />
      <SiteHeader />
      <HomeHeroSection
        title={homeHero.title}
        text={homeHero.text}
        withBackground
      />
      <GapNurseSection
        title={gapNurse.title}
        text={gapNurse.text}
        withBackground
      />
      <TeamSection title={team.title} text={team.text} />
      <MMOSection title={mmoCat.title} text={mmoCat.text} withBackground />
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
  }
`;
