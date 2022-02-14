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
export const WorkCaseHero = ({
  data: {
    title,
    text,
    logo,
    thumbnail,
    thumbnailRetina,
    thumbnailIphone,
    thumbnailSamsung,
    thumbnailSamsungRetina,
    thumbnailIphoneRetina,
    googlePlayThumbnail,
    appStoreThumbnail,
    alt,
    color,
    linkAppStore,
    linkGooglePlay,
    type,
    linkCurrentWeb,
  },
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  return (
    <BoxPositionRelative height={isDesktopOrTablet ? 'auto' : '1000px'}>
      {!isDesktopOrTablet && <SvgHero color={color} bottom={0} right={0} />}
      <Container pad={{ vertical: 'xlarge' }}>
        <Grid
          columns={isSmall ? 'full' : getSize({ type, isDesktopOrTablet })}
          gap={isDesktopOrTablet ? 'medium' : 'xlarge'}
          align="center"
        >
          <BoxOrder
            order={type === 'mobile' ? '0' : '1'}
            align={isSmall ? 'center' : 'start'}
          >
            <ImgFluid
              mobileWidth={type === 'mobile' && '100px'}
              alt={alt}
              src={logo}
            />
            <Heading
              margin={{ bottom: 'none', top: 'medium' }}
              color={color}
              level={2}
            >
              {title}
            </Heading>
            <Box width={isDesktopOrTablet ? '100%' : '80%'}>
              <Paragraph
                fontWeight="400"
                textAlign={isSmall ? 'center' : 'none'}
                size="xxlarge"
                color={color}
              >
                {text}
              </Paragraph>
            </Box>
            {type === 'mobile' ? (
              <Box justify="between" direction="row">
                <a href={linkGooglePlay}>
                  <ImgFluid
                    mobileWidth="98%"
                    alt={alt}
                    src={googlePlayThumbnail}
                  />
                </a>
                <a href={linkAppStore}>
                  <ImgFluid
                    mobileWidth="98%"
                    alt={alt}
                    src={appStoreThumbnail}
                  />
                </a>
              </Box>
            ) : (
              <Box align-items="center" height="60px" width="200px">
                <LinkWebButton
                  bgColor={color}
                  fill
                  label="Check it out"
                  href={linkCurrentWeb}
                  target="_blank"
                />
              </Box>
            )}
          </BoxOrder>
          {type === 'mobile' ? (
            <Box
              justify="around"
              pad={{ left: isSmall ? 'none' : 'large' }}
              direction="row"
            >
              <Box>
                <ImgFluid
                  srcSet={thumbnailSamsungRetina}
                  src={thumbnailSamsung}
                  alt={alt}
                />
              </Box>
              <Box
                alignSelf="end"
                pad={{ left: isDesktopOrTablet ? 'small' : 'none' }}
              >
                <ImgFluid
                  srcSet={thumbnailIphoneRetina}
                  alt={alt}
                  src={thumbnailIphone}
                />
              </Box>
            </Box>
          ) : (
            <ImgWebCase
              margin="0 auto"
              srcSet={thumbnailRetina}
              src={thumbnail}
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
    thumbnail: PropTypes.string,
    thumbnailRetina: PropTypes.string,
    thumbnailIphone: PropTypes.string,
    thumbnailSamsung: PropTypes.string,
    thumbnailSamsungRetina: PropTypes.string,
    thumbnailIphoneRetina: PropTypes.string,
    googlePlayThumbnail: PropTypes.string,
    appStoreThumbnail: PropTypes.string,
    alt: PropTypes.string,
    color: PropTypes.string,
    linkAppStore: PropTypes.string,
    linkGooglePlay: PropTypes.string,
    type: PropTypes.string,
    linkCurrentWeb: PropTypes.string,
  }).isRequired,
};
