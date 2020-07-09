import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';

import { Heading } from '../../legos/typography/Heading';
import { StyledButton } from '../../legos/Button/Button';
import { Text } from '../../legos/typography/Text';

const skillItems = [
  'Branding',
  'Visual Design',
  'UI & interactions',
  'Frontend',
  'Backend',
  'Mobile apps',
];

export const WorkHeroSection = ({ withBackground }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const columnsCount = isMobile ? 1 : 2;
  const isDesktopOrTablet = useMediaQuery({ query: '(max-width: 1210px)' });
  const headingSize = isDesktopOrTablet ? 4 : 2;
  const alignVariant = isMobile ? 'center' : 'start';
  const textMarginVariant = isMobile
    ? { horizontal: 'medium', vertical: 'xsmall' }
    : { vertical: 'xsmall' };
  const gridColumns = isMobile ? 2 : 1;
  const textFontSizeVariant = isMobile ? 'small' : 'xlarge';
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'medium' }
    : { horizontal: 'xlarge', vertical: 'medium' };

  return (
    <Box
      height={{ min: '695px' }}
      justify="center"
      background={
        !isMobile && withBackground
          ? {
              size: 'xxsmall',
              position: 'bottom right',
              image: 'url(/assets/background-work.svg)',
            }
          : {
              color: '#FFFFFF',
            }
      }
    >
      <Heading alignSelf="center" level={1} color="brand" wordBreak="normal">
        Work
      </Heading>
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        fill="horizontal"
      >
        <Box
          pad={paddingVariant}
          justify="center"
          margin={isMobile ? { bottom: 'large' } : { paddingVariant }}
        >
          <Box>
            <Heading
              level={headingSize}
              color="brand"
              textAlign="start"
              wordBreak="normal"
              margin={{ top: 'none' }}
            >
              How we work and what we do. And a bit of our favorite projects and
              the impact they&apos;ve made.
            </Heading>
            <Box pad={{ bottom: 'small' }}>
              <Text size="medium" color="brand">
                We work really well together but are awesome separately, too.
                Hire only what you need, we’ll build our team around your
                project.
              </Text>
            </Box>
            <Box pad={{ bottom: 'large' }}>
              <Text size="medium" color="brand">
                From small HTML-template, to building entire applications, we’ve
                worked on projects of all sizes.
              </Text>
            </Box>
            <Box
              pad={{ top: 'medium' }}
              justify="center"
              alignSelf={alignVariant}
              height="60px"
              width="200px"
            >
              <StyledButton label="How we work" fill color="accent-1" primary />
            </Box>
          </Box>
        </Box>
        <Box
          justify="end"
          pad={
            !isMobile
              ? { left: '200px', right: '40px', bottom: '50px' }
              : { paddingVariant }
          }
          background={
            isMobile
              ? {
                  color: 'brand',
                }
              : undefined
          }
        >
          <Heading
            level={headingSize}
            alignSelf="center"
            color="text-white"
            wordBreak="normal"
            fontWeight="normal"
            margin={{ vertical: isMobile ? 'large' : 'small' }}
          >
            What we do?
          </Heading>

          <Grid
            alignSelf={isMobile ? 'center' : undefined}
            columns={{ count: gridColumns, size: ['auto', 'auto'] }}
            pad={isMobile ? { bottom: 'large' } : undefined}
          >
            {skillItems.map(skillItem => (
              <Text
                key={skillItem}
                size={textFontSizeVariant}
                margin={textMarginVariant}
                color="text-white"
              >
                {skillItem}
              </Text>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

WorkHeroSection.propTypes = {
  withBackground: PropTypes.bool,
};

WorkHeroSection.defaultProps = {
  withBackground: undefined,
};
