/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { WorkCaseHero } from '../components/Work/WorkCaseHero';
import { MobileCaseWrapper } from '../components/Work/Mobile/MobileCase/MobileCaseWrapper';
import { MobileCaseDevice } from '../components/Work/Mobile/MobileCase/MobileCaseDevice';
import { WorkCaseHeaderInfo } from '../components/Work/WorkCaseHeaderInfo';
import { MobileCaseInfo } from '../components/Work/Mobile/MobileCase/MobileCaseInfo';
import { WebCaseInfo } from '../components/Work/Web/WebCase/WebCaseInfo';
import { WebCaseImage } from '../components/Work/Web/WebCase/WebCaseImage';
import { VideoBox } from '../legos/VideoFrame/VideoBox';

const getPositionBackground = index => {
  if (index % 4 === 0) {
    return { right: 0, transform: 'scale(-1, 1)' };
  }

  if (index % 2 === 0) {
    return { left: 0 };
  }
  return {
    left: 0,
    sRight: 0,
    bottom: '20%',
    sBottom: '20%',
    transform: 'rotate(180deg)',
  };
};
const WorkCaseTemplate = ({ data }) => {
  const { srcVideo, text, title, color } = data.workCase.frontmatter;
  const workData = data.workCase.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={text} />
      <SiteHeader />
      <WorkCaseHero withBackground data={workData} />
      <WorkCaseHeaderInfo data={workData} />
      {workData.type === 'mobile' ? (
        <MobileCaseInfo data={workData} />
      ) : (
        <WebCaseInfo data={workData} />
      )}
      {srcVideo && <VideoBox src={srcVideo} />}
      {workData.type === 'mobile'
        ? workData.imageCollections[0].imageSection.map(
            ({ image, imageRetina, imageSecond, imageSecondRetina }, index) => {
              return (
                <MobileCaseWrapper
                  key={image + imageRetina}
                  color={color}
                  withBackground={!(index % 2)}
                  isSvgHalfCircle={!(index % 2)}
                  isSvgTriangleRounded={!!(index % 2)}
                  position={getPositionBackground(index + 1)}
                >
                  <MobileCaseDevice
                    thumbnail={`/${image}`}
                    thumbnail2x={`/${imageRetina} 2x`}
                    thumbnailSecond={`/${imageSecond}`}
                    thumbnailSecond2x={`/${imageSecondRetina} 2x`}
                    android={!(index % 2)}
                    data={workData}
                  />
                </MobileCaseWrapper>
              );
            },
          )
        : workData.imageCollections[0].imageSection.map(
            ({ image, imageRetina }, index) => {
              return (
                <MobileCaseWrapper
                  key={image}
                  color={color}
                  withBackground={!(index % 2)}
                  isSvgHalfCircle={!!(index % 2)}
                  isSvgTriangleRounded={!(index % 2)}
                  position={getPositionBackground(index)}
                >
                  <WebCaseImage
                    firstImage={`/${image}`}
                    firstImageRetina={`/${imageRetina} 2x`}
                  />
                </MobileCaseWrapper>
              );
            },
          )}
      <SiteFooter />
    </Layout>
  );
};

export default WorkCaseTemplate;

export const pageQuery = graphql`
  query WorkItemByPath($slug: String!) {
    workCase: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        path
        type
        alt
        linkAppStore
        linkGooglePlay
        order
        title
        text
        logo
        color
        technologies
        languages
        time
        srcVideo
        iconsWorkInfo {
          technologiesIcon
          languageIcon
          timeIcon
        }
        imageCollections {
          imageSection {
            image
            imageSecond
            imageRetina
            imageSecondRetina
          }
        }
        imageMobileLink {
          googlePlayImage
          appStoreImage
        }
        imagePreview {
          image
          imageRetina
          imageSecond
          imageSecondRetina
        }
        preview {
          title
          text
          textInfo
        }
      }
    }
  }
`;
