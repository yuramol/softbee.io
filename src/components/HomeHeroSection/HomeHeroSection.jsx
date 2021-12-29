import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext, Heading } from 'grommet';

import Container from '../Layout/Container';
import { BoxOrder } from '../../legos/Box/BoxOrder';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
// import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const HomeHeroSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isDense = maxBreakpoints('sTablet', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  const columnsCount = isDense ? 'full' : ['auto', '1/2'];
  const textAlignVariant = isDense ? 'center' : 'start';
  const textFontSizeVariant = isDense ? 'large' : 'xxlarge';
  const gapvariant = isDesktopOrTablet ? 'medium' : 'xlarge';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isDesktopOrTablet ? 'auto' : '847px' }}
      background={
        !isDesktopOrTablet && {
          size: 'auto',
          position: 'top right',
          image: 'url(/assets/background-home.svg)',
        }
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
          <BoxOrder order={isDense && '-1'} align="center">
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
