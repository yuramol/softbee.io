import React from 'react';

import { Box, Grid } from 'grommet';
import PropTypes from 'prop-types';
import Container from '../../../Layout/Container';
import { ImgFluid } from '../../../Layout/ImgFluid';
import { Paragraph } from '../../../../legos/typography/Paragraph';
import { Heading } from '../../../../legos/typography/Heading';
import { useBreakpoint } from '../../../../utils/useBreakpoint';
import { BoxPositionRelative, SvgHero } from '../../styled';

export const MobileCaseHero = ({
  data: {
    title,
    text,
    logo,
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
  },
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  return (
    <BoxPositionRelative height={isDesktopOrTablet ? 'auto' : '1000px'}>
      {!isDesktopOrTablet && <SvgHero color={color} bottom={0} right={0} />}
      <Container pad={{ vertical: 'xlarge' }}>
        <Grid
          columns={isSmall ? 'full' : ['auto', '58.33333%']}
          gap={isDesktopOrTablet ? 'medium' : 'xlarge'}
          align="center"
        >
          <Box align={isSmall ? 'center' : 'start'}>
            <ImgFluid mobileWidth="100px" alt={alt} src={logo} />
            <Heading margin={{ bottom: 'none' }} color={color} level={2}>
              {title}
            </Heading>
            <Box width={isDesktopOrTablet ? '100%' : '80%'}>
              <Paragraph
                textAlign={isSmall ? 'center' : 'none'}
                size="xxlarge"
                color={color}
              >
                {text}
              </Paragraph>
            </Box>
            <Box justify="between" direction="row">
              <a href={linkGooglePlay}>
                <ImgFluid
                  mobileWidth="98%"
                  alt={alt}
                  src={googlePlayThumbnail}
                />
              </a>
              <a href={linkAppStore}>
                <ImgFluid mobileWidth="98%" alt={alt} src={appStoreThumbnail} />
              </a>
            </Box>
          </Box>
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
        </Grid>
      </Container>
    </BoxPositionRelative>
  );
};

MobileCaseHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thumbnailIphone: PropTypes.string.isRequired,
    thumbnailSamsung: PropTypes.string.isRequired,
    googlePlayThumbnail: PropTypes.string.isRequired,
    appStoreThumbnail: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
