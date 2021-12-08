import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { maxBreakpoints } from '../../utils/useBreakpoints';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';

export const HomeHeroSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('mobile', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);
  const headingSize = isDesktopOrTablet ? 2 : 1;
  const textAlignVariant = isMobile ? 'center' : 'start';
  const headingFontSizeVariant = isMobile ? 3 : 1;
  const textFontSizeVariant = isMobile ? 'medium' : undefined;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      height={isDesktopOrTablet ? 'auto' : '847px'}
      background={
        !isDesktopOrTablet
          ? {
              size: 'small',
              position: 'right',
              image: 'url(/assets/background-home.svg)',
            }
          : undefined
      }
    >
      <Container>
        <Grid
          columns={{ count: columnsCount, size: 'auto' }}
          gap="small"
          pad={paddingVariant}
        >
          {isMobile && (
            <Box align="center">
              <ImgFluid
                src="/assets/sectionHeader.svg"
                alt="People create a website"
              />
            </Box>
          )}
          <Box
            justify="center"
            align={textAlignVariant}
            pad={isMobile ? { bottom: 'medium' } : undefined}
          >
            <Box pad={{ bottom: 'small' }}>
              <Heading
                level={headingFontSizeVariant && headingSize}
                fontWeight="800"
                color="brand"
                textAlign={textAlignVariant}
              >
                {title}
              </Heading>
            </Box>
            <Box
              width="300px"
              pad={{ bottom: 'large' }}
              align={textAlignVariant}
            >
              <Text
                size={textFontSizeVariant}
                lineHeight="32px"
                whiteSpace="pre-line"
                color="brand"
              >
                {text}
              </Text>
            </Box>

            <Box justify="center" align="center" height="60px" width="200px">
              <ButtonLetsTalk label="Let’s talk" color="accent-1" />
            </Box>
          </Box>
          {isMobile || (
            <Box align="center" justify="center">
              <ImgFluid
                src="/assets/sectionHeader.svg"
                alt="People create a website"
              />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

HomeHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // withBackground: PropTypes.bool,
};

HomeHeroSection.defaultProps = {
  // withBackground: undefined,
};
