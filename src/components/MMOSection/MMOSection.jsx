import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const MMOSection = ({ title, text, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isTablet = maxBreakpoints('desktopOrTablet', size);
  const isTabletIpad = maxBreakpoints('tablet', size);

  const columnsCount = isTabletIpad ? 'full' : ['auto', '1/3'];
  const textFontSizeVariant = isMobile ? 'large' : 'xlarge';
  const textAlignVariant = isTabletIpad ? 'center' : 'start';
  const gapVariant = isTablet ? 'medium' : 'large';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isTablet ? undefined : '800px' }}
      justify="center"
      background={
        withBackground
          ? {
              size: 'contain',
              position: 'left top',
              image: !isTablet && 'url(/assets/mmoBackground.svg)',
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
                <source srcSet="/assets/sectionMMO.webp" type="image/webp" />
                <ImgFluid
                  src="/assets/sectionMMO.png"
                  alt="screenshot of MMO website page, mobile version"
                />
              </picture>
            </Box>
            <Box pad={{ left: 'medium' }}>
              <picture>
                <source
                  srcSet="/assets/sectionMMOMini.webp"
                  type="image/webp"
                />
                <ImgFluid
                  src="/assets/sectionMMOMini.png"
                  alt="screenshot of MMO website page, mobile version"
                />
              </picture>
            </Box>
          </Box>

          <BoxOrder
            order={isTabletIpad && '-1'}
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
                bottom: isTabletIpad ? 'none' : 'large',
                top: 'none',
              }}
              size={textFontSizeVariant}
              color="text-dark-grey"
            >
              {text}
            </Paragraph>

            {isTabletIpad || (
              <Box height={{ min: '60px' }} width={{ min: '244px' }}>
                <Button primary fill label="See case study" href="/mmo-case" />
              </Box>
            )}
          </BoxOrder>

          {isTabletIpad && (
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
