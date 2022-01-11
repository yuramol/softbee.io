import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const GapNurseSection = ({ title, text, withBackground }) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();

  const columnsCount = isSmall ? 'full' : ['auto', '58.33333%'];
  const heightSection = withBackground ? '700px' : '800px';
  const textAlignVariant = isSmall ? 'center' : 'start';
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';
  const textFontSizeVariant = isSmall ? 'large' : 'xlarge';

  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      height={{ min: isDesktopOrTablet ? undefined : heightSection }}
      background={
        withBackground
          ? {
              size: 'auto',
              position: 'top right',
              image: !isDesktopOrTablet
                ? 'url(/assets/background-gapNurse.svg)'
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
          <Box align={isSmall ? 'center' : 'start'}>
            <Heading
              margin={{ bottom: 'large', top: 'none' }}
              level={2}
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>

            <Paragraph
              margin={{ bottom: isSmall ? 'none' : 'large', top: 'none' }}
              size={textFontSizeVariant}
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
                  srcSet="/assets/PhoneGapNurse.webp, /assets/PhoneGapNurse@2x.webp 2x"
                  type="image/webp"
                />
                <ImgFluid
                  mobileWidth={isSmall && '80%'}
                  srcSet="/assets/PhoneGapNurse@2x.png 2x"
                  src="/assets/PhoneGapNurse.png"
                  alt="The iphone that shows the application GapNurse"
                />
              </picture>
            </Box>
            <Box align={isSmall ? 'center' : undefined}>
              <picture>
                <source
                  srcSet="/assets/PhoneGapNurse2.webp, /assets/PhoneGapNurse2@2x.webp 2x"
                  type="image/webp"
                />
                <ImgFluid
                  mobileWidth={isSmall && '80%'}
                  src="/assets/PhoneGapNurse2.png"
                  srcSet="/assets/PhoneGapNurse2@2x.png 2x"
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
              <Button
                href="/gapnurse-case"
                label="See case study"
                primary
                fill
              />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

GapNurseSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

GapNurseSection.defaultProps = {
  withBackground: undefined,
};
