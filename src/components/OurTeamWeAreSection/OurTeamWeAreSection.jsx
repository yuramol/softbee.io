import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const OurTeamWeAreSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isDense = maxBreakpoints('sTablet', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  const columnsCount = isMobile ? 'full' : ['1/2', 'auto'];
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';
  const textFontSizeVariant = isDense ? 'large' : 'xlarge';
  const textAlignVariant = isMobile ? 'center' : undefined;

  return (
    <Box
      height={{ min: isDesktopOrTablet ? undefined : '800px' }}
      pad={{ vertical: 'xlarge' }}
      justify="center"
      background={{
        size: 'contain',
        position: 'left top',
        image: !isDesktopOrTablet
          ? 'url(/assets/mmoBackground.svg)'
          : undefined,
      }}
    >
      <Container>
        <Grid columns={columnsCount} gap={gapVariant} align="center">
          <Box align={isMobile ? 'center' : undefined}>
            <ImgFluid
              mobileWidth={isMobile && '80%'}
              src="/assets/ourTeamAboutSection.svg"
              alt="People are creating a website"
            />
          </Box>
          <Box>
            <Heading
              level={2}
              margin={{ top: 'none', bottom: 'large' }}
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>
            <Paragraph
              size={textFontSizeVariant}
              whiteSpace="pre-line"
              color="brand"
              margin={{ top: 'none', bottom: 'none' }}
            >
              {text}
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

OurTeamWeAreSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
