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
    imagePreview: { image, imageRetina, imageSecond, imageSecondRetina },
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
              <ImgFluid
                src={`/${image}`}
                srcSet={`/${imageRetina} 2x`}
                alt={altWebCase}
              />
            </picture>
          </Box>
          {imageSecond && (
            <Box pad={{ left: 'medium' }}>
              <picture>
                <ImgFluid
                  srcSet={`/${imageSecondRetina} 2x`}
                  src={`/${imageSecond}`}
                  alt={altWebCase}
                />
              </picture>
            </Box>
          )}
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
            size={isSmall ? 'medium' : 'xlarge'}
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
    imagePreview: PropTypes.shape({
      image: PropTypes.string,
      imageRetina: PropTypes.string,
      imageSecond: PropTypes.string,
      imageSecondRetina: PropTypes.string,
    }),
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
