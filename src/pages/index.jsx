import React from 'react';
import { graphql } from 'gatsby';
import { ResponsiveContext } from 'grommet';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { TeamSection } from '../components/TeamSection/TeamSection';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { LookingSection } from '../components/LookingSection/LookingSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { LetsStarted } from '../components/LetsStarted/LetsStarted';
import { BlogSection } from '../components/BlogSection/BlogSection';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

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


const IndexPage = ({ location }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('desktopOrTablet', size);

  return (
    <Layout location={location} title={meta.title}>
      <SEO title={meta.title} description={meta.description} />
      <SiteHeader />
      <HomeHeroSection
        title={homeHero.title}
        text={homeHero.text}
        withBackground={!isMobile}
      />
      <GapNurseSection
        title={gapNurse.title}
        text={gapNurse.text}
        withBackground
      />
      <TeamSection title={team.title} text={team.text} />
      <MMOSection title={mmoCat.title} text={mmoCat.text} withBackground />
      <LookingSection title={looking.title} text={looking.text} />
      <WhatWeDoSection title={whatWeDo.title} />
      <LetsStarted />
      <BlogSection withBackground />
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
