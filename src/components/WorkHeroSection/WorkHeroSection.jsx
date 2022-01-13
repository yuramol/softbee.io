import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import styled from 'styled-components';

import Container from '../Layout/Container';
import { Heading } from '../../legos/typography/Heading';
import { Button } from '../../legos/Button/Button';
import { Text } from '../../legos/typography/Text';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { Paragraph } from '../../legos/typography/Paragraph';

const StyledList = styled('ul')`
  color: #fff;
  padding: 0;
`;

export const WorkHeroSection = ({
  subtitle,
  textSecond,
  text,
  whatWeDo,
  withBackground,
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  const columnsCount = isSmall ? 'full' : ['58.33333%', 'auto'];
  const textAlignVariant = isSmall ? 'center' : 'start';
  const textFontSizeVariant = isSmall ? 'large' : 'xlarge';

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
        <Grid align="end" columns={columnsCount}>
          <Box>
            <Heading
              level={1}
              textAlign={textAlignVariant}
              margin={{ top: 'none', bottom: 'large' }}
            >
              {subtitle}
            </Heading>
            <Paragraph
              size={textFontSizeVariant}
              textAlign={textAlignVariant}
              color="brand"
              whiteSpace="pre-line"
              margin={{ top: 'none', bottom: 'medium' }}
            >
              {text}
            </Paragraph>
            <Paragraph
              size={textFontSizeVariant}
              textAlign={textAlignVariant}
              color="brand"
              whiteSpace="pre-line"
              margin={{ top: 'none', bottom: 'large' }}
            >
              {textSecond}
            </Paragraph>
            <Box
              justify="center"
              alignSelf={textAlignVariant}
              height={{ min: '60px' }}
              width={{ min: '200px' }}
            >
              <Button label="How we work" href="#" fill primary />
            </Box>
          </Box>
          <Box
            align="end"
            pad={{ left: '100px' }}
            background={
              isSmall
                ? {
                    color: 'brand',
                  }
                : undefined
            }
          >
            <Heading
              level={2}
              color="text-white"
              margin={{ top: 'none', bottom: 'large' }}
            >
              What we do?
            </Heading>
            <StyledList>
              {whatWeDo.map(skillItem => (
                <li key={skillItem}>
                  <Text color="text-white" size={textFontSizeVariant}>
                    {skillItem}
                  </Text>
                </li>
              ))}
            </StyledList>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

WorkHeroSection.propTypes = {
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textSecond: PropTypes.string.isRequired,
  whatWeDo: PropTypes.arrayOf(PropTypes.string).isRequired,
  withBackground: PropTypes.bool,
};

WorkHeroSection.defaultProps = {
  withBackground: undefined,
};
