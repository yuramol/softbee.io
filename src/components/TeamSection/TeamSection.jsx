import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import { theme } from '../../utils/theme';
import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';

export const TeamSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tablet', size);
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile ? 'large' : 'xlarge';
  return (
    <Container>
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        gap="medium"
        pad={paddingVariant}
      >
        <Box
          pad={isMobile ? { top: 'xlarge' } : undefined}
          justify="center"
          align="center"
        >
          <ImgFluid
            src="/assets/section.svg"
            alt="Man working at the computer"
          />
        </Box>
        <Box justify="center" align={textAlignVariant}>
          <Box>
            <Heading
              level={fontSizeVariant}
              color="brand"
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>
          </Box>
          <Box width="491px" pad={{ bottom: 'large' }}>
            <Box pad={{ bottom: 'medium' }}>
              <Text whiteSpace="pre-line" size="medium" color="text-dark-grey">
                {text}
              </Text>
            </Box>
            <Box
              align={isMobile ? 'center' : 'start'}
              pad={isTablet ? { top: 'large' } : { vertical: 'medium' }}
            >
              <RouterLink
                to="our-team"
                hoveredColor={theme.global.colors.brand}
              >
                Meet our team &#128074;
              </RouterLink>
            </Box>
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
