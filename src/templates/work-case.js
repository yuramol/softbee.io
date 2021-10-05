/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';

import { useMediaQuery } from 'react-responsive';
import { Box, Grid } from 'grommet';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { Heading } from '../legos/typography/Heading';
import { Text } from '../legos/typography/Text';
import { ButtonNextCase } from '../components/ButtonNextCase/ButtonNextCase';

const WorkCaseTemplate = ({ data, pageContext, location }) => {
  const {
    workCase: {
      frontmatter: {
        title,
        text,
        logo,
        displayTwoImages,
        thumbnail,
        thumbnailSecond,
        color,
        technologies,
        languages,
        time,
        screenshots,
      },
    },
  } = data;

  const { previous, next } = pageContext;

  const nextLink = `/work/${
    next ? next.frontmatter.path : previous.frontmatter.path
  }`;

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1110px)' });
  const columnsCountTablet = isTabletOrMobile ? 1 : 2;

  return (
    <Layout location={location}>
      <SEO title={title} description={text} />
      <SiteHeader />
      <Box>
        <Box>
          <Box width="100%" align="center">
            <Heading
              level={isMobile ? 4 : 2}
              color="brand"
              style={{ textAlign: 'center' }}
            >
              {title}
            </Heading>
          </Box>
          <Grid
            columns={['auto', 'auto']}
            pad={{ horizontal: 'xlarge' }}
            style={isMobile ? { height: 'auto' } : { height: '480px' }}
            align={textAlignVariant}
          >
            <Box align={textAlignVariant} pad={{ left: 'large', top: 'large' }}>
              <Box>
                <img src={logo} alt={title} />
              </Box>
              {isMobile || (
                <Box>
                  <Box width="470px" pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                    <Heading
                      level={4}
                      color="brand"
                      style={{ lineHeight: '130%', fontSize: '24px' }}
                      margin={{ vertical: '10px' }}
                    >
                      About client:
                    </Heading>
                  </Box>

                  <Box width="380px">
                    <Text
                      size="medium"
                      color="text-dark-grey"
                      style={{
                        fontFamily: 'HelveticaNeueCyr',
                        lineHeight: '150%',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {text}
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
            {displayTwoImages ? (
              <Box align="center">
                <Grid
                  columns={{ count: columnsCountTablet, size: 'auto' }}
                  gap="medium"
                >
                  <Box align="center">
                    <img
                      style={{ height: 'auto', width: '100%' }}
                      src={thumbnail}
                      alt={title}
                    />
                  </Box>
                  {isTabletOrMobile || (
                    <Box align="center">
                      <img
                        style={{ height: 'auto', width: '100%' }}
                        src={thumbnailSecond}
                        alt={title}
                      />
                    </Box>
                  )}
                </Grid>
              </Box>
            ) : (
              <Box
                align="center"
                justify="center"
                pad={isMobile ? { horizontal: 'large' } : undefined}
              >
                <img
                  style={{ height: 'auto', width: '100%' }}
                  src="/assets/sectionMMO.png"
                  alt="Screenshot of MMO website page "
                />
              </Box>
            )}
          </Grid>
          {isMobile && (
            <Box align="left" pad={{ horizontal: 'xlarge' }}>
              <Box style={{ width: '100%' }}>
                <Heading
                  level={6}
                  color="brand"
                  style={{ lineHeight: '100%' }}
                  margin={{ vertical: '10px' }}
                >
                  About client:
                </Heading>
              </Box>
              <Box width="100%">
                <Text
                  color="text-dark-grey"
                  style={{
                    fontFamily: 'HelveticaNeueCyr',
                    lineHeight: '150%',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {text}
                </Text>
              </Box>
            </Box>
          )}
          <Box
            width="100%"
            style={isMobile ? { height: '130px' } : { height: '210px' }}
            align="center"
            justify="center"
            margin={isMobile ? { top: '30px' } : undefined}
            background={{ color }}
          >
            <Grid
              columns={['1/3', '1/3', '1/3']}
              style={
                isMobile
                  ? { width: '100%', height: isMobile ? '130px' : '150px' }
                  : { width: 'auto' }
              }
              pad="small"
            >
              <Box
                style={
                  isMobile
                    ? { width: 'auto', justifyContent: 'center' }
                    : { width: '250px' }
                }
                align="center"
                pad={
                  isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }
                }
              >
                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  margin={{ vertical: isMobile ? 'none' : 'small' }}
                >
                  Technologies:
                </Heading>

                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  style={{ fontWeight: '700', lineHeight: '16px' }}
                  margin={{ vertical: 'small' }}
                >
                  {technologies}
                </Heading>
              </Box>
              <Box
                style={
                  isMobile
                    ? { width: 'auto', justifyContent: 'center' }
                    : { width: '250px' }
                }
                align="center"
                pad={
                  isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }
                }
              >
                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  margin={{ vertical: isMobile ? 'none' : 'small' }}
                >
                  Languages:
                </Heading>
                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  style={{ fontWeight: '700', lineHeight: '16px' }}
                  margin={{ vertical: 'small' }}
                >
                  {languages}
                </Heading>
              </Box>
              <Box
                style={
                  isMobile
                    ? { width: 'auto', justifyContent: 'center' }
                    : { width: '250px' }
                }
                align="center"
                pad={
                  isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }
                }
              >
                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  margin={{ vertical: isMobile ? 'none' : 'small' }}
                >
                  Time:
                </Heading>
                <Heading
                  level={isMobile ? undefined : 5}
                  color="white"
                  style={{ fontWeight: '700', lineHeight: '16px' }}
                  margin={{ vertical: 'small' }}
                >
                  {time} h
                </Heading>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box>
          <img
            style={{ width: '100%', height: 'auto' }}
            src={screenshots}
            alt={title}
          />
        </Box>
        <ButtonNextCase url={nextLink} />
      </Box>
      <SiteFooter />
    </Layout>
  );
};

export default WorkCaseTemplate;

export const pageQuery = graphql`
  query WorkItemByPath($slug: String!) {
    workCase: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        text
        logo
        displayTwoImages
        thumbnail
        thumbnailSecond
        color
        technologies
        languages
        time
        screenshots
      }
    }
  }
`;
