import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const OurTeamHeroSection = ({ title, text, withBackground }) => {
  const { isSmall, isDesktopOrTablet, isSTablet } = useBreakpoint();

  const columnsCount = isSTablet ? 'full' : ['auto', '50%'];
  const textAlignVariant = isSTablet ? 'center' : undefined;
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';
  const textFontSizeVariant = isSTablet ? 'medium' : 'xxlarge';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      justify="center"
      height={{ min: isDesktopOrTablet ? 'auto' : '800px' }}
      background={
        withBackground && {
          size: 'contain',
          position: 'bottom right',
          image: !isDesktopOrTablet
            ? 'url(/assets/background-ourTeam.svg)'
            : undefined,
        }
      }
    >
      <Container>
        <Grid columns={columnsCount} gap={gapVariant} align="center">
          <Box>
            <Heading
              level={1}
              textAlign={textAlignVariant}
              margin={{ top: 'none', bottom: 'large' }}
            >
              {title}
            </Heading>
            <Paragraph
              margin={{ bottom: 'none', top: 'none' }}
              textAlign={textAlignVariant}
              size={textFontSizeVariant}
              color="brand"
            >
              {text}
            </Paragraph>
          </Box>

          <BoxOrder order={isSTablet ? '-1' : undefined} align="center">
            <ImgFluid
              mobileWidth={isSmall && '80%'}
              src="/assets/ourTeamHerosection.svg"
              alt="A group of people are developing a web site"
            />
          </BoxOrder>
        </Grid>
      </Container>
    </Box>
  );
};
OurTeamHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

OurTeamHeroSection.defaultProps = {
  withBackground: undefined,
};
