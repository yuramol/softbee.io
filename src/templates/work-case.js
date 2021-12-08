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

import Container from '../components/Layout/Container';
import { ImgFluid } from '../components/Layout/ImgFluid';
import styled from 'styled-components';

const GridInfo = styled(Grid)`
  width: ${({ isMobile }) => (isMobile ? '100%' : 'auto')};
`;

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
          <Container>
            <Box width="100%" align="center">
              <Heading
                level={isMobile ? 4 : 2}
                textAlign="center"
                color="brand"
              >
                {title}
              </Heading>
            </Box>
            <Grid
              columns={['auto', 'auto']}
              pad={
                isTabletOrMobile
                  ? { horizontal: 'large', vertical: 'large' }
                  : { horizontal: 'xlarge', vertical: 'large' }
              }
              align={textAlignVariant}
            >
              <Box
                align={textAlignVariant}
                pad={{ left: 'large', top: 'large' }}
              >
                <Box>
                  <img src={logo} alt={title} />
                </Box>
                {isMobile || (
                  <Box>
                    <Box
                      width="470px"
                      pad={{ bottom: 'xxsmall', top: 'xlarge' }}
                    >
                      <Heading
                        level={5}
                        color="brand"
                        lineHeight="130%"
                        margin={{ vertical: 'xsmall' }}
                      >
                        About client:
                      </Heading>
                    </Box>

                    <Box width="380px">
                      <Text
                        size="medium"
                        color="text-dark-grey"
                        whiteSpace="pre-line"
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
                      <ImgFluid src={thumbnail} alt={title} />
                    </Box>
                    {isTabletOrMobile || (
                      <Box align="center">
                        <ImgFluid src={thumbnailSecond} alt={title} />
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
                  <ImgFluid
                    src="/assets/sectionMMO.png"
                    alt="Screenshot of MMO website page "
                  />
                </Box>
              )}
            </Grid>
            {isMobile && (
              <Box align="start" pad={{ horizontal: 'xlarge' }}>
                <Box>
                  <Heading
                    level={6}
                    color="brand"
                    lineHeight="130%"
                    margin={{ vertical: 'xsmall' }}
                  >
                    About client:
                  </Heading>
                </Box>
                <Box width="100%">
                  <Text color="text-dark-grey" whiteSpace="pre-line">
                    {text}
                  </Text>
                </Box>
              </Box>
            )}
          </Container>
          <Box
            width="100%"
            height={isMobile ? '130px' : '210px'}
            align="center"
            justify="center"
            margin={isMobile ? { top: '30px' } : undefined}
            background={{ color }}
          >
            <GridInfo
              isMobile={isMobile}
              columns={['1/3', '1/3', '1/3']}
              pad="small"
            >
              <Box
                width={isMobile ? 'auto' : '250px'}
                justify={isMobile ? 'center' : undefined}
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
                  fontWeight="700"
                  lineHeight="16px"
                  margin={{ vertical: 'small' }}
                >
                  {technologies}
                </Heading>
              </Box>
              <Box
                width={isMobile ? 'auto' : '250px'}
                justify={isMobile ? 'center' : undefined}
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
                  fontWeight="700"
                  lineHeight="16px"
                  margin={{ vertical: 'small' }}
                >
                  {languages}
                </Heading>
              </Box>
              <Box
                width={isMobile ? 'auto' : '250px'}
                justify={isMobile ? 'center' : undefined}
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
                  fontWeight="700"
                  lineHeight="16px"
                  margin={{ vertical: 'small' }}
                >
                  {time} h
                </Heading>
              </Box>
            </GridInfo>
          </Box>
        </Box>
        <Box>
          <ImgFluid src={screenshots} alt={title} />
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
