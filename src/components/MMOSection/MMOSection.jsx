import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const MMOSection = ({ title, text, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const shouldHaveBlueFigure = maxBreakpoints('desktopOrTablet', size);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('desktopOrTablet', size);
  const textAlignVariant = isMobile ? 'center' : 'start';
  const headerLevel = isMobile ? 4 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      height={isMobile ? '850px' : '800px'}
      justify="center"
      background={
        withBackground
          ? {
              size: 'small',
              position: 'absolute',
              image: !shouldHaveBlueFigure
                ? 'url(/assets/mmoBackground.svg)'
                : undefined,
              color: '#f0f6f4',
            }
          : {
              color: 'white',
            }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        gap={isTablet ? 'large' : 'medium'}
        pad={paddingVariant}
      >
        {isMobile || (
          <Box direction="row" justify="center" align="center">
            <Box
              justify="center"
              align="start"
              margin={{ left: 'xsmall', right: 'medium' }}
            >
              <img
                style={{ height: 'auto', width: '110%' }}
                src="/assets/sectionMMO.webp"
                alt="screenshot of MMO website page"
              />
            </Box>
            <Box justify="center" pad={{ left: 'large' }}>
              <img
                style={{ height: 'auto', width: '130%' }}
                src="/assets/sectionMMOMini.webp"
                alt="screenshot of MMO website page, mobile version"
              />
            </Box>
          </Box>
        )}
        <Box
          justify="center"
          pad={isTablet ? undefined : { left: 'xlarge', right: 'xlarge' }}
          align={textAlignVariant}
        >
          <Box>
            <Heading
              level={headerLevel}
              color="brand"
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>
          </Box>
          <Box width="491px" pad={{ bottom: 'small' }}>
            <Box pad={{ bottom: 'large' }}>
              <Text
                size="medium"
                color="text-dark-grey"
                textAlign={textAlignVariant}
                style={{ whiteSpace: 'pre-line' }}
              >
                {text}
              </Text>
            </Box>
            {isMobile || <RouterLink to="/mmo-case">See case study</RouterLink>}
          </Box>
        </Box>
        {isMobile && (
          <Box direction="column" gap="medium" justify="end" align="center">
            <Box align="center">
              <img
                style={{ height: 'auto', width: '100%' }}
                src="/assets/sectionMMOMini.webp"
                alt="screenshot of MMO website page, mobile version"
              />
            </Box>
            <Box>
              <img
                style={{ height: 'auto', width: '100%' }}
                src="/assets/sectionMMO.webp"
                alt="screenshot of MMO website page"
              />
            </Box>
          </Box>
        )}
        {isMobile && (
          <Box align="center" pad={{ top: 'medium', bottom: 'xlarge' }}>
            <RouterLink to="/mmo-case">See case study</RouterLink>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

MMOSection.propTypes = {
  title: PropTypes.string.isRequired,

  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

MMOSection.defaultProps = {
  withBackground: undefined,
};
