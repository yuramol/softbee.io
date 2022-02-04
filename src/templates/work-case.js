/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';
import { MobileCaseHero } from '../components/Work/Mobile/MobileCase/MobileCaseHero';
import { MobileCaseInfo } from '../components/Work/Mobile/MobileCase/MobileCaseInfo';
import { MobileCaseWrapper } from '../components/Work/Mobile/MobileCase/MobileCaseWrapper';
import { MobileCaseDevice } from '../components/Work/Mobile/MobileCase/MobileCaseDevice';

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
  return (
    <Layout>
      <SEO title={title} description={text} />
      <SiteHeader />
      <MobileCaseHero withBackground data={workData} />
      <MobileCaseInfo data={workData} />
      {arrayItemImages.map(
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
        googlePlayThumbnail
        appStoreThumbnail
        logo
        alt
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
          textInfoMobileCase
        }
      }
    }
  }
`;
