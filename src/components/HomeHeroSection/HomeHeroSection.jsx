import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { Paragraph } from '../../legos/typography/Paragraph';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';

export const HomeHeroSection = ({ title, text }) => {
  const { isMobile, isSTablet, isDesktopOrTablet } = useBreakpoint();

  const columnsCount = isSTablet ? 'full' : ['auto', '1/2'];
  const textAlignVariant = isSTablet ? 'center' : 'start';
  const textFontSizeVariant = isSTablet ? 'large' : 'xxlarge';
  const gapvariant = isDesktopOrTablet ? 'medium' : 'xlarge';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isDesktopOrTablet ? 'auto' : '847px' }}
      background={
        !isDesktopOrTablet
          ? {
              size: 'auto',
              position: 'top right',
              image: 'url(/assets/background-home.svg)',
            }
          : undefined
      }
    >
      <Container>
        <Grid columns={columnsCount} gap={gapvariant} align="center">
          <Box align={textAlignVariant}>
            <Heading
              margin={{ bottom: 'large', top: 'none' }}
              level={1}
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>

            <Paragraph
              margin={{ bottom: 'large', top: 'none' }}
              size={textFontSizeVariant}
              color="brand"
            >
              {text}
            </Paragraph>

            <Box align-items="center" height="60px" width="200px">
              <ButtonLetsTalk primary label="Let’s talk" />
            </Box>
          </Box>
          <BoxOrder order={isSTablet ? '-1' : undefined} align="center">
            <ImgFluid
              mobileWidth={isMobile && '80%'}
              src="/assets/sectionHeader.svg"
              alt="People create a website"
            />
          </BoxOrder>
        </Grid>
      </Container>
    </Box>
  );
};

HomeHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
