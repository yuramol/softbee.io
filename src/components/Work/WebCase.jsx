import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const WebCase = ({ data }) => {
  const { isSmall, isDesktopOrTablet, isTablet } = useBreakpoint();
  const { title, text } = data.preview;

  const textAlignVariant = isTablet ? 'center' : 'start';

  return (
    <Container>
      <Grid
        columns={isTablet ? 'full' : ['auto', '1/3']}
        gap={isDesktopOrTablet ? 'medium' : 'large'}
        align="center"
      >
        <Box direction="row" justify="center" align="center">
          <Box>
            <picture>
              <source
                srcSet={`${data.thumbnailWebp}, ${data.thumbnailWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                src={data.thumbnail}
                srcSet={data.thumbnailRetina}
                alt="screenshot of MMO website page, mobile version"
              />
            </picture>
          </Box>
          <Box pad={{ left: 'medium' }}>
            <picture>
              <source
                srcSet={`${data.thumbnailSecondWebp}, ${data.thumbnailSecondWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                srcSet={data.thumbnailSecondRetina}
                src={data.thumbnailSecond}
                alt="screenshot of MMO website page, mobile version"
              />
            </picture>
          </Box>
        </Box>

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
              <Button primary fill label="See case study" href="/mmo-case" />
            </Box>
          )}
        </BoxOrder>

        {isTablet && (
          <Box
            margin={{ horizontal: 'auto' }}
            height={{ min: '60px' }}
            width={{ min: '244px' }}
          >
            <Button primary fill label="See case study" href="/mmo-case" />
          </Box>
        )}
      </Grid>
    </Container>
    // </Box>
  );
};

WebCase.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
