import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { Button } from '../../legos/Button/Button';

export const HomeHeroSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const rowsCount = size === 'small' ? 2 : 1;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const isDesktopOrTablet = useMediaQuery({ query: '(max-width: 1210px)' });
  const headingSize = isDesktopOrTablet ? 2 : 1;
  const textAlignVariant = isTabletOrMobile ? 'center' : 'start';
  const headingFontSizeVariant = isTabletOrMobile ? 3 : 1;
  const textFontSizeVariant = isTabletOrMobile ? 'medium' : undefined;
  const paddingVariant = isTabletOrMobile ? 'large' : 'xlarge';

  return (
    <Box
      height={isDesktopOrTablet || '847px'}
      background={
        withBackground && {
          size: 'small',
          position: 'right',
          image: 'url(./assets/background-home.svg)',
        }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        rows={{ count: rowsCount, size: 'auto' }}
        gap="small"
        pad={paddingVariant}
      >
        {isTabletOrMobile && (
          <Box align="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="./assets/sectionHeader.svg"
              alt="Gatsby Scene"
            />
          </Box>
        )}
        <Box justify="center" align={textAlignVariant}>
          <Box pad={{ bottom: 'small' }}>
            <Heading
              level={headingFontSizeVariant && headingSize}
              style={{ fontWeight: '800' }}
              color="brand"
              textAlign={textAlignVariant}
            >
              Your partners in new products creating
            </Heading>
          </Box>
          <Box width="300px" pad={{ bottom: 'large' }} align={textAlignVariant}>
            <Text
              size={textFontSizeVariant}
              color="brand"
              style={{ lineHeight: '32px' }}
            >
              with a bear drinking afterwards.
            </Text>
            <Text color="brand" style={{ lineHeight: '32px' }}>
              UPDATED: and staying at home =)
            </Text>
          </Box>

          <Box justify="center" align="center" height="60px" width="200px">
            <Button
              label="Let’s talk"
              fill
              color="accent-1"
              primary
              href="/let's-talk"
            />
          </Box>
        </Box>
        {isTabletOrMobile || (
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="./assets/sectionHeader.svg"
              alt="Gatsby Scene"
            />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

HomeHeroSection.propTypes = {
  withBackground: PropTypes.bool,
};

HomeHeroSection.defaultProps = {
  withBackground: undefined,
};
