import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { ImgFluid } from '../Layout/ImgFluid';

export const MobileCase = ({
  data: {
    preview: { title, text },
    thumbnail,
    thumbnailRetina,
    thumbnailSecond,
    thumbnailSecondRetina,
    thumbnailSecondWebp,
    thumbnailSecondWebpRetina,

    thumbnailWebpRetina,
    thumbnailWebp,
  },
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  const altMobileCase = 'Mobile case image';
  return (
    <Container>
      <Grid
        columns={isSmall ? 'full' : ['auto', '58.33333%']}
        gap={isDesktopOrTablet ? 'medium' : 'xlarge'}
        align="center"
      >
        <Box align={isSmall ? 'center' : 'start'}>
          <Heading
            margin={{ bottom: 'large', top: 'none' }}
            level={2}
            textAlign={isSmall ? 'center' : 'start'}
          >
            {title}
          </Heading>

          <Paragraph
            margin={{ bottom: isSmall ? 'none' : 'large', top: 'none' }}
            size={isSmall ? 'large' : 'xlarge'}
            color="text-dark-grey"
          >
            {text}
          </Paragraph>

          {isSmall || (
            <Box height={{ min: '60px' }} width={{ min: '244px' }}>
              <Button
                href="/gapnurse-case"
                label="See case study"
                primary
                fill
              />
            </Box>
          )}
        </Box>
        <Box
          justify={isSmall ? 'center' : 'between'}
          gap="small"
          direction="row"
          align="center"
        >
          <Box align={isSmall ? 'center' : undefined}>
            <picture>
              <source
                srcSet={`${thumbnailWebp}, ${thumbnailWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                srcSet={thumbnailRetina}
                src={thumbnail}
                alt={altMobileCase}
              />
            </picture>
          </Box>
          <Box align={isSmall ? 'center' : undefined}>
            <picture>
              <source
                srcSet={`${thumbnailSecondWebp}, ${thumbnailSecondWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                src={thumbnailSecond}
                srcSet={thumbnailSecondRetina}
                alt={altMobileCase}
              />
            </picture>
          </Box>
        </Box>
        {isSmall && (
          <Box
            margin={{ horizontal: 'auto' }}
            height={{ min: '60px' }}
            width={{ min: '244px' }}
          >
            <Button href="/gapnurse-case" label="See case study" primary fill />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

MobileCase.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    thumbnailRetina: PropTypes.string.isRequired,
    thumbnailSecond: PropTypes.string.isRequired,
    thumbnailSecondRetina: PropTypes.string.isRequired,
    thumbnailSecondWebp: PropTypes.string.isRequired,
    thumbnailSecondWebpRetina: PropTypes.string.isRequired,
    thumbnailWebpRetina: PropTypes.string.isRequired,
    thumbnailWebp: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
