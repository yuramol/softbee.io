import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const GapNurseSection = ({ title, text, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const shouldHaveBlueFigure = maxBreakpoints('desktopOrTablet', size);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tabletOrMobile', size);
  const shouldHaveBlueFigure = maxBreakpoints('desktopOrTablet', size);
  const heightSection = withBackground ? '700px' : '800px';
  const textAlignVariant = isMobile ? 'center' : 'start';
  const fontSizeVariant = isMobile ? 4 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  return (
    <Box
      height={isTablet ? undefined : heightSection}
      justify="center"
      background={
        withBackground
          ? {
              size: 'small',
              position: 'top right',
              image: !shouldHaveBlueFigure
                ? 'url(/assets/background-gapNurse.svg)'
                : undefined,
              color: '#f0f6f4',
            }
          : {
              color: 'white',
            }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: ['auto', 'auto'] }}
        gap="large"
        pad={paddingVariant}
      >
        <Box
          justify="center"
          align={isMobile ? 'center' : 'start'}
          pad={{ horisontal: 'large' }}
        >
          <Box pad={{ bottom: 'small' }}>
            <Heading
              level={fontSizeVariant}
              color="brand"
              textAlign={textAlignVariant}
            >
              {title}
            </Heading>
          </Box>
          <Box
            pad={
              isMobile
                ? { bottom: 'medium', horizontal: 'medium' }
                : { bottom: 'medium' }
            }
          >
            <Text
              size="medium"
              color="text-dark-grey"
              style={{ fontFamily: 'HelveticaNeueCyr', whiteSpace: 'pre-line' }}
            >
              {text}
            </Text>
          </Box>
          {isMobile || (
            <RouterLink to="/gapnurse-case">See case study</RouterLink>
          )}
        </Box>
        <Grid columns={{ count: 2, size: 'auto' }}>
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="/assets/PhoneGapNurse.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="/assets/PhoneGapNurse2.png"
              alt="The iphone that shows the application GapNurse"
            />
          </Box>
        </Grid>
        {isMobile && (
          <Box align="center" pad={{ top: 'medium', bottom: 'xlarge' }}>
            <RouterLink to="/gapnurse-case">See case study</RouterLink>
          </Box>
        )}
      </Grid>
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
