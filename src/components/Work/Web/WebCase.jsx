import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../../Layout/Container';
import { BoxOrder } from '../../../legos/Box/BoxOrder';
import { Button } from '../../../legos/Button/Button';
import { Heading } from '../../../legos/typography/Heading';
import { ImgFluid } from '../../Layout/ImgFluid';
import { Paragraph } from '../../../legos/typography/Paragraph';
import { useBreakpoint } from '../../../utils/useBreakpoint';

const getSizeForGrid = ({ isPosition, isTablet }) => {
  if (isTablet) {
    return 'full';
  }
  if (isPosition) {
    return ['1/3', 'auto'];
  }
  return ['auto', '1/3'];
};

export const WebCase = ({
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
    path,
  },
  isPosition,
}) => {
  const { isSmall, isDesktopOrTablet, isTablet } = useBreakpoint();
  const textAlignVariant = isTablet ? 'center' : 'start';
  const altWebCase = 'Web case image ';
  const link = `/work/${path}`;

  return (
    <Container>
      <Grid
        columns={getSizeForGrid({ isPosition, isTablet })}
        gap={isDesktopOrTablet ? 'medium' : 'large'}
        align="center"
      >
        <BoxOrder
          order={isPosition && !isTablet ? 1 : 0}
          direction="row"
          justify="center"
          align="center"
        >
          <Box>
            <picture>
              <source
                srcSet={`${thumbnailWebp}, ${thumbnailWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                src={thumbnail}
                srcSet={thumbnailRetina}
                alt={altWebCase}
              />
            </picture>
          </Box>
          <Box pad={{ left: 'medium' }}>
            <picture>
              <source
                srcSet={`${thumbnailSecondWebp}, ${thumbnailSecondWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                srcSet={thumbnailSecondRetina}
                src={thumbnailSecond}
                alt={altWebCase}
              />
            </picture>
          </Box>
        </BoxOrder>

        <BoxOrder
          order={isTablet ? '-1' : undefined}
          justify="center"
          align={textAlignVariant}
        >
          <Heading
            margin={{ bottom: 'large', top: 'none' }}
            level={2}
            textAlign={textAlignVariant}
          >
            {title}
          </Heading>

          <Paragraph
            margin={{
              bottom: isTablet ? 'none' : 'large',
              top: 'none',
            }}
            size={isSmall ? 'large' : 'xlarge'}
            color="text-dark-grey"
          >
            {text}
          </Paragraph>

          {isTablet || (
            <Box height={{ min: '60px' }} width={{ min: '244px' }}>
              <Button primary fill label="See case study" href={link} />
            </Box>
          )}
        </BoxOrder>

        {isTablet && (
          <Box
            margin={{ horizontal: 'auto' }}
            height={{ min: '60px' }}
            width={{ min: '244px' }}
          >
            <Button primary fill label="See case study" href={link} />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

WebCase.propTypes = {
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
  isPosition: PropTypes.bool,
};

WebCase.defaultProps = {
  isPosition: false,
};
