import React from 'react';
import { Box, Grid } from 'grommet';
import PropTypes from 'prop-types';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { BoxPositionRelative, SvgHero } from './styled';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { LinkWebButton, ImgWebCase } from './Web/styled';

const getSize = ({ type }) => {
  if (type === 'web') {
    return ['50%', 'auto'];
  }
  if (type === 'mobile') {
    return ['auto', '50%'];
  }
  return null;
};

export const WorkCaseHero = ({
  data: {
    title,
    text,
    alt,
    color,
    type,
    linkWeb,
    linkAppStore,
    linkGooglePlay,
    imageMobileLink,
    imagePreview: { image, imageRetina },
  },
}) => {
  const { isSmall, isSTablet, isTablet, isDesktopOrTablet } = useBreakpoint();
  const isChangeLayout =
    (type === 'mobile' && isSmall) || (isTablet && type === 'web');

  return (
    <BoxPositionRelative>
      {!isDesktopOrTablet && <SvgHero color={color} bottom={0} right={0} />}
      <Container pad={{ vertical: 'xlarge' }} style={{ paddingTop: '0' }}>
        <Grid
          margin={{ bottom: isDesktopOrTablet ? undefined : 'xlarge' }}
          columns={
            isChangeLayout ? 'full' : getSize({ type, isDesktopOrTablet })
          }
          gap="medium"
          align="center"
        >
          <BoxOrder
            align={isChangeLayout ? 'center' : 'start'}
            pad={{ top: '70px' }}
          >
            <Heading
              textAlign={isChangeLayout ? 'center' : 'start'}
              margin={{ bottom: 'none', top: 'medium' }}
              color={color}
              level={1}
            >
              {title}
            </Heading>
            <Box>
              <Paragraph
                fontWeight="400"
                textAlign={isChangeLayout ? 'center' : 'none'}
                size={isSTablet ? 'medium' : 'xxlarge'}
                color={color}
              >
                {text}
              </Paragraph>
            </Box>
            {type === 'mobile' ? (
              <Box justify="between" direction="row">
                {linkGooglePlay !== '#' &&
                  imageMobileLink &&
                  imageMobileLink.googlePlayImage &&
                  imageMobileLink.googlePlayImage.length > 0 && (
                    <a href={linkGooglePlay}>
                      <ImgFluid
                        mobileWidth="98%"
                        alt={alt}
                        src={`/${imageMobileLink.googlePlayImage}`}
                      />
                    </a>
                  )}
                {linkAppStore !== '#' &&
                  imageMobileLink &&
                  imageMobileLink.appStoreImage &&
                  imageMobileLink.appStoreImage.length > 0 && (
                    <a href={linkAppStore}>
                      <ImgFluid
                        mobileWidth="98%"
                        alt={alt}
                        src={`/${imageMobileLink.appStoreImage}`}
                      />
                    </a>
                  )}
              </Box>
            ) : null}
            {linkWeb !== '#' && (
              <Box
                align-items="center"
                height="60px"
                width="100%"
                style={{
                  maxWidth: '420px',
                }}
              >
                <LinkWebButton
                  bgColor="black"
                  fill
                  label="Check it out"
                  href={linkWeb}
                  target="_blank"
                />
              </Box>
            )}
          </BoxOrder>
          {type === 'mobile' ? (
            <Box justify="center" direction="row">
              <Box>
                <ImgFluid
                  srcSet={`/${imageRetina} 2x`}
                  src={`/${image}`}
                  alt={alt}
                />
              </Box>
            </Box>
          ) : (
            <ImgWebCase
              margin="0 auto"
              srcSet={`/${imageRetina} 2x`}
              src={`/${image}`}
              alt={alt}
            />
          )}
        </Grid>
      </Container>
    </BoxPositionRelative>
  );
};

WorkCaseHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    logo: PropTypes.string,
    alt: PropTypes.string,
    color: PropTypes.string,
    linkAppStore: PropTypes.string,
    linkGooglePlay: PropTypes.string,
    type: PropTypes.string,
    linkWeb: PropTypes.string,
    imageMobileLink: PropTypes.shape({
      googlePlayImage: PropTypes.string,
      appStoreImage: PropTypes.string,
    }),
    imagePreview: PropTypes.shape({
      image: PropTypes.string,
      imageRetina: PropTypes.string,
      imageSecond: PropTypes.string,
      imageSecondRetina: PropTypes.string,
    }),
  }).isRequired,
};
