import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { ImgFluid } from '../Layout/ImgFluid';

export const MobileCase = ({ data }) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  const { title, text } = data.preview;

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
                srcSet={`${data.thumbnailWebp}, ${data.thumbnailWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                srcSet={data.thumbnailRetina}
                src={data.thumbnail}
                alt="The iphone that shows the application GapNurse"
              />
            </picture>
          </Box>
          <Box align={isSmall ? 'center' : undefined}>
            <picture>
              <source
                srcSet={`${data.thumbnailSecondWebp}, ${data.thumbnailSecondWebpRetina}`}
                type="image/webp"
              />
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                src={data.thumbnailSecond}
                srcSet={data.thumbnailSecondRetina}
                alt="The iphone that shows the application GapNurse"
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
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
