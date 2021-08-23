import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { OurTeamHeroSection } from '../components/OurTeamHeroSection/OurTeamHeroSection';
import { OurTeamAboutTeam } from '../components/OurTeamAboutTeam/OurTeamAboutTeam';
import { OurTeamWeAreSection } from '../components/OurTeamWeAreSection/OurTeamWeAreSection';
import { OurTeamFollowSection } from '../components/OurTeamFollowSection/OurTeamFollowSection';

const WorkPage = ({ location, data }) => {
  const {
    meta,
    main,
    members,
    letsTalk,
    follow,
  } = data.teamPage.edges[0].node.frontmatter;

  return (
    <Layout location={location} title={meta.title} withBackground>
      <SEO title={meta.title} description={meta.description} />
      <SiteHeader />
      <OurTeamHeroSection title={main.title} text={main.text} withBackground />
      <OurTeamAboutTeam
        title={members.title}
        text={members.text}
        list={members.list}
      />
      <OurTeamWeAreSection text={letsTalk} />
      <OurTeamFollowSection text={follow} />
      <SiteFooter />
    </Layout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query {
    teamPage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "team" } } }
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
              text
            }
            members {
              title
              text
              list {
                name
                position
                photo
              }
            }
            letsTalk
            follow
          }
        }
      }
    }
  }
`;
