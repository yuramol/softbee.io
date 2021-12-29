import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const TeamSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  const columnsCount = isMobile ? 'full' : ['1/2', 'auto'];
  const textAlignVariant = isMobile ? 'center' : 'start';
  const textFontSizeVariant = isMobile ? 'large' : 'xlarge';
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';

  return (
    <Container pad={{ vertical: 'xlarge' }}>
      <Grid columns={columnsCount} gap={gapVariant} align="center">
        <Box align={isMobile && 'center'}>
          <ImgFluid
            mobileWidth={isMobile && '80%'}
            src="/assets/section.svg"
            alt="Man working at the computer"
          />
        </Box>
        <Box align={textAlignVariant}>
          <Heading
            margin={{ bottom: 'large', top: '0' }}
            level={2}
            textAlign={textAlignVariant}
          >
            {title}
          </Heading>

          <Paragraph
            margin={{ bottom: 'large', top: 'none' }}
            whiteSpace="pre-line"
            size={textFontSizeVariant}
            color="text-dark-grey"
          >
            {text}
          </Paragraph>

          <Box
            margin={{ horizontal: isMobile && 'auto' }}
            height={{ min: '60px' }}
            width={{ min: '260px' }}
          >
            <Button
              primary
              fill
              href="our-team"
              label="Meet our team &#128074;"
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
