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
  const workData = data.workCase.frontmatter;
  const {
    thumbnailFirstCase,
    thumbnailFirstCaseRetina,
    thumbnailSecondCase,
    thumbnailSecondCaseRetina,
    thumbnailThirdCase,
    thumbnailThirdCaseRetina,
    thumbnailFirstSectionAndroid,
    thumbnailFirstSectionAndroidSecond,
    thumbnailFirstSectionAndroidRetina,
    thumbnailFirstSectionAndroidSecondRetina,
    thumbnailFirstSectionIos,
    thumbnailFirstSectionIosSecond,
    thumbnailFirstSectionIosRetina,
    thumbnailFirstSectionIosSecondRetina,
    thumbnailSecondSectionAndroid,
    thumbnailSecondSectionAndroidSecond,
    thumbnailSecondSectionAndroidRetina,
    thumbnailSecondSectionAndroidSecondRetina,
    thumbnailSecondSectionIos,
    thumbnailSecondSectionIosSecond,
    thumbnailSecondSectionIosRetina,
    thumbnailSecondSectionIosSecondRetina,
    text,
    title,
    color,
  } = data.workCase.frontmatter;
  const arrayItemImages = [
    {
      firstImage: thumbnailFirstSectionAndroid,
      firstImageRetina: thumbnailFirstSectionAndroidRetina,
      secondImage: thumbnailFirstSectionAndroidSecond,
      secondRetinaImage: thumbnailFirstSectionAndroidSecondRetina,
    },
    {
      firstImage: thumbnailFirstSectionIos,
      firstImageRetina: thumbnailFirstSectionIosRetina,
      secondImage: thumbnailFirstSectionIosSecond,
      secondRetinaImage: thumbnailFirstSectionIosSecondRetina,
    },
    {
      firstImage: thumbnailSecondSectionAndroid,
      firstImageRetina: thumbnailSecondSectionAndroidRetina,
      secondImage: thumbnailSecondSectionAndroidSecond,
      secondRetinaImage: thumbnailSecondSectionAndroidSecondRetina,
    },
    {
      firstImage: thumbnailSecondSectionIos,
      firstImageRetina: thumbnailSecondSectionIosRetina,
      secondImage: thumbnailSecondSectionIosSecond,
      secondRetinaImage: thumbnailSecondSectionIosSecondRetina,
    },
  ];
  const webItemImages = [
    {
      firstImage: thumbnailFirstCase,
      firstImageRetina: thumbnailFirstCaseRetina,
    },
    {
      firstImage: thumbnailSecondCase,
      firstImageRetina: thumbnailSecondCaseRetina,
    },
    {
      firstImage: thumbnailThirdCase,
      firstImageRetina: thumbnailThirdCaseRetina,
    },
  ];
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
      {workData.type === 'mobile'
        ? arrayItemImages.map(
            (
              { firstImage, firstImageRetina, secondImage, secondRetinaImage },
              index,
            ) => {
              return (
                <MobileCaseWrapper
                  key={firstImage}
                  color={color}
                  withBackground={!(index % 2)}
                  isSvgHalfCircle={!(index % 2)}
                  isSvgTriangleRounded={!!(index % 2)}
                  position={getPositionBackground(index + 1)}
                >
                  <MobileCaseDevice
                    thumbnail={firstImage}
                    thumbnail2x={firstImageRetina}
                    thumbnailSecond={secondImage}
                    thumbnailSecond2x={secondRetinaImage}
                    android={!(index % 2)}
                    data={workData}
                  />
                </MobileCaseWrapper>
              );
            },
          )
        : webItemImages.map(({ firstImage, firstImageRetina }, index) => {
            return (
              <MobileCaseWrapper
                key={firstImage}
                color={color}
                withBackground={!(index % 2)}
                isSvgHalfCircle={!!(index % 2)}
                isSvgTriangleRounded={!(index % 2)}
                position={getPositionBackground(index)}
              >
                <WebCaseImage
                  firstImage={firstImage}
                  firstImageRetina={firstImageRetina}
                />
              </MobileCaseWrapper>
            );
          })}
      <SiteFooter />
    </Layout>
  );
};

export default WorkCaseTemplate;

export const pageQuery = graphql`
  query WorkItemByPath($slug: String!) {
    workCase: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        type
        googlePlayThumbnail
        appStoreThumbnail
        logo
        alt
        linkCurrentWeb
        thumbnail
        thumbnailRetina
        thumbnailFirstCase
        thumbnailFirstCaseRetina
        thumbnailSecondCase
        thumbnailSecondCaseRetina
        thumbnailThirdCase
        thumbnailThirdCaseRetina
        thumbnailIphone
        thumbnailIphoneRetina
        thumbnailSamsung
        thumbnailSamsungRetina
        thumbnailFirstSectionAndroid
        thumbnailFirstSectionAndroidSecond
        thumbnailFirstSectionAndroidRetina
        thumbnailFirstSectionAndroidSecondRetina
        thumbnailSecondSectionAndroid
        thumbnailSecondSectionAndroidSecond
        thumbnailSecondSectionAndroidRetina
        thumbnailSecondSectionAndroidSecondRetina
        thumbnailFirstSectionIos
        thumbnailFirstSectionIosSecond
        thumbnailFirstSectionIosRetina
        thumbnailFirstSectionIosSecondRetina
        thumbnailSecondSectionIos
        thumbnailSecondSectionIosSecond
        thumbnailSecondSectionIosRetina
        thumbnailSecondSectionIosSecondRetina
        linkAppStore
        linkGooglePlay
        timeIcon
        languagesIcon
        technologiesIcon
        time
        languages
        technologies
        title
        text
        color
        backgroundHero
        preview {
          textInfoFirst
          textInfoSecond
        }
      }
    }
  }
`;
