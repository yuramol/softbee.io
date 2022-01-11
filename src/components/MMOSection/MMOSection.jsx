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

export const MMOSection = ({ title, text, withBackground }) => {
  const { isSmall, isDesktopOrTablet, isTablet } = useBreakpoint();

  const columnsCount = isTablet ? 'full' : ['auto', '1/3'];
  const textFontSizeVariant = isSmall ? 'large' : 'xlarge';
  const textAlignVariant = isTablet ? 'center' : 'start';
  const gapVariant = isDesktopOrTablet ? 'medium' : 'large';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isDesktopOrTablet ? undefined : '800px' }}
      justify="center"
      background={
        withBackground
          ? {
              size: 'contain',
              position: 'left top',
              image: !isDesktopOrTablet
                ? 'url(/assets/mmoBackground.svg)'
                : undefined,
              color: '#f0f6f4',
            }
          : {
              color: 'white',
            }
      }
    >
      <Container>
        <Grid columns={columnsCount} gap={gapVariant} align="center">
          <Box direction="row" justify="center" align="center">
            <Box>
              <picture>
                <source
                  srcSet="/assets/sectionMMO.webp, /assets/sectionMMO@2x.webp 2x"
                  type="image/webp"
                />
                <ImgFluid
                  src="/assets/sectionMMO.png"
                  srcSet="/assets/sectionMMO@2x.png 2x"
                  alt="screenshot of MMO website page, mobile version"
                />
              </picture>
            </Box>
            <Box pad={{ left: 'medium' }}>
              <picture>
                <source
                  srcSet="/assets/sectionMMOMini.webp, /assets/sectionMMOMini@2x.webp 2x"
                  type="image/webp"
                />
                <ImgFluid
                  srcSet="/assets/sectionMMOMini@2x.png 2x"
                  src="/assets/sectionMMOMini.png"
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
              size={textFontSizeVariant}
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
    </Box>
  );
};

MMOSection.propTypes = {
  title: PropTypes.string.isRequired,

  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

MMOSection.defaultProps = {
  withBackground: undefined,
};
