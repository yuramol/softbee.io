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

const getSize = ({ type, isDesktopOrTablet }) => {
  if (type === 'web') {
    return isDesktopOrTablet ? ['60%', 'auto'] : ['50%', 'auto'];
  }
  if (type === 'mobile') {
    return ['auto', '58.33333%'];
  }
  return null;
};
const getPosition = ({ type, isSmall }) => {
  if (isSmall) {
    return 0;
  }
  if (type === 'mobile') {
    return 0;
  }
  return 1;
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
  const { isSmall, isSTablet, isDesktopOrTablet } = useBreakpoint();
  return (
    <BoxPositionRelative>
      {!isDesktopOrTablet && <SvgHero color={color} bottom={0} right={0} />}
      <Container pad={{ vertical: 'xlarge' }}>
        <Grid
          margin={{ bottom: isDesktopOrTablet ? undefined : 'xlarge' }}
          columns={isSmall ? 'full' : getSize({ type, isDesktopOrTablet })}
          gap={isDesktopOrTablet ? 'medium' : 'xlarge'}
          align="center"
        >
          <BoxOrder
            order={getPosition({ type, isSmall })}
            align={isSmall ? 'center' : 'start'}
          >
            <Heading
              margin={{ bottom: 'none', top: 'medium' }}
              color={color}
              level={1}
            >
              {title}
            </Heading>
            <Box>
              <Paragraph
                fontWeight="400"
                textAlign={isSmall ? 'center' : 'none'}
                size={isSTablet ? 'medium' : 'xxlarge'}
                color={color}
              >
                {text}
              </Paragraph>
            </Box>
            {type === 'mobile' ? (
              <Box justify="between" direction="row">
                {linkGooglePlay !== '#' && (
                  <a href={linkGooglePlay}>
                    <ImgFluid
                      mobileWidth="98%"
                      alt={alt}
                      src={`/${imageMobileLink.googlePlayImage}`}
                    />
                  </a>
                )}
                {linkAppStore !== '#' && (
                  <a href={linkAppStore}>
                    <ImgFluid
                      mobileWidth="98%"
                      alt={alt}
                      src={`/${imageMobileLink.appStoreImage}`}
                    />
                  </a>
                )}
              </Box>
            ) : (
              <>
                {linkWeb !== '#' && (
                  <Box align-items="center" height="60px" width="200px">
                    <LinkWebButton
                      bgColor={color}
                      fill
                      label="Check it out"
                      href={linkWeb}
                      target="_blank"
                    />
                  </Box>
                )}
              </>
            )}
            {linkWeb !== '#' && (
              <Box align-items="center" height="60px" width="100%">
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
            <Box
              justify="center"
              pad={{ left: isSmall ? 'none' : 'large' }}
              direction="row"
            >
              <Box>
                <ImgFluid
                  srcSet={`/${imageRetina} 2x`}
                  src={`/${image}`}
                  alt={alt}
                />
              </Box>
              {/* <Box
                alignSelf="end"
                pad={{ left: isDesktopOrTablet ? 'large' : 'xlarge' }}
              >
                <ImgFluid
                  srcSet={`/${imageSecondRetina} 2x`}
                  alt={alt}
                  src={`/${imageSecond}`}
                />
              </Box> */}
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
