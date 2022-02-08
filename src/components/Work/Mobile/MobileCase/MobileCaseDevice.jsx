import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import Container from '../../../Layout/Container';
import { ImgFluid } from '../../../Layout/ImgFluid';
import { Heading } from '../../../../legos/typography/Heading';
import { useBreakpoint } from '../../../../utils/useBreakpoint';
import { BoxOrder } from '../../../../legos/Box/BoxOrder';

export const MobileCaseDevice = ({
  data: { logo, color },
  thumbnail,
  thumbnail2x,
  thumbnailSecond,
  thumbnailSecond2x,
  android,
  alt,
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  return (
    <Container pad={{ vertical: 'xlarge' }}>
      <Box
        width={isSmall ? '100%' : '80%'}
        direction="row"
        justify="around"
        align="center"
        wrap={!!isSmall}
        alignContent="center"
        margin={{ horizontal: 'auto' }}
      >
        <Box width={isSmall ? '48%' : undefined}>
          <ImgFluid srcSet={thumbnail2x} alt={alt} src={thumbnail} />
        </Box>
        <BoxOrder
          order={isSmall ? '-1' : undefined}
          margin={{ horizontal: 'medium' }}
          align="center"
          width={isSmall ? '100%' : undefined}
        >
          <ImgFluid
            alt={alt}
            src={logo}
            width={isDesktopOrTablet ? '70px' : '100px'}
          />
          <Heading
            margin={{ top: 'small' }}
            alignSelf="center"
            level={3}
            color={color}
          >
            {android ? 'Android' : 'iOS'}
          </Heading>
        </BoxOrder>
        <Box width={isSmall ? '48%' : undefined}>
          <ImgFluid
            alt={alt}
            srcSet={thumbnailSecond2x}
            src={thumbnailSecond}
          />
        </Box>
      </Box>
    </Container>
  );
};

MobileCaseDevice.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  thumbnail: PropTypes.string.isRequired,
  thumbnail2x: PropTypes.string.isRequired,
  thumbnailSecond: PropTypes.string.isRequired,
  thumbnailSecond2x: PropTypes.string.isRequired,
  android: PropTypes.bool,
  alt: PropTypes.string.isRequired,
};

MobileCaseDevice.defaultProps = {
  android: false,
};
