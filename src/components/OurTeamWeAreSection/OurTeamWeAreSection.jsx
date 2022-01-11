import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const OurTeamWeAreSection = ({ title, text }) => {
  const { isSmall, isSTablet, isDesktopOrTablet } = useBreakpoint();

  const columnsCount = isSmall ? 'full' : ['1/2', 'auto'];
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';
  const textFontSizeVariant = isSTablet ? 'large' : 'xlarge';
  const textAlignVariant = isSmall ? 'center' : undefined;

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
          <Box align={isSmall ? 'center' : undefined}>
            <ImgFluid
              mobileWidth={isSmall && '80%'}
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
