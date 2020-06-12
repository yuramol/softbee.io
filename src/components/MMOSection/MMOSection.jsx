import React from 'react';
import { useMediaQuery } from 'react-responsive';

import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const MMOSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const rowsCount = size === 'small' ? 2 : 1;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  const paddingVariant = isMobile ? 'large' : 'xlarge';

  return (
    <Box
      height="800px"
      justify="center"
      background={
        withBackground
          ? {
              size: 'small',
              position: 'absolute',
              image: 'url(./assets/mmoBackground.svg)',
              color: '#F0F6F4',
            }
          : {
              color: '#F0F6F4',
            }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        rows={{ count: rowsCount, size: 'auto' }}
        gap="medium"
        pad={paddingVariant}
      >
        {isMobile || (
          <Box direction="row" justify="center" margin={{ left: 'large' }}>
            <Box justify="center" align="start" margin={{ left: 'xsmall' }}>
              <img
                style={{ height: 'auto', width: '100%' }}
                src="./assets/sectionMMO.svg"
                alt="screenshot of MMO website page"
              />
            </Box>
            <Box justify="center" pad={{ left: 'large', top: 'large' }}>
              <img
                style={{ height: 'auto', width: '100%' }}
                src="./assets/mmoSectionMini.svg"
                alt="screenshot of MMO website page, mobile version"
              />
            </Box>
          </Box>
        )}
        <Box
          justify="center"
          align={textAlignVariant}
          margin={isMobile || { left: 'large', top: 'large' }}
        >
          <Box>
            <Heading level={2} color="brand" textAlign={textAlignVariant}>
              MMO.cat selling website
            </Heading>
          </Box>
          <Box width="491px" pad={{ bottom: 'small' }}>
            <Box pad={{ bottom: 'large' }}>
              <Text
                size="medium"
                color="text-dark-grey"
                textAlign={textAlignVariant}
              >
                We provided full-stack development service
              </Text>
              <Text
                size="medium"
                color="text-dark-grey"
                textAlign={textAlignVariant}
              >
                for end-to-end websites of MMO.cat team
              </Text>
            </Box>
            {isMobile || (
              <RouterLink fill to="/404" primary>
                See case study
              </RouterLink>
            )}
          </Box>
        </Box>
        {isMobile && (
          <Box direction="column" gap="medium" justify="end" align="center">
            <Box>
              <img
                style={{ height: 'auto', width: '100%' }}
                src="./assets/sectionMMO.svg"
                alt="screenshot of MMO website page"
              />
            </Box>
            <Box align="center">
              <img
                style={{ height: 'auto', width: '150%' }}
                src="./assets/mmoSectionMini.svg"
                alt="screenshot of MMO website page, mobile version"
              />
            </Box>
          </Box>
        )}
        {isMobile && (
          <RouterLink align="center" fill to="/404" primary>
            See case study
          </RouterLink>
        )}
      </Grid>
    </Box>
  );
};

MMOSection.propTypes = {
  withBackground: PropTypes.bool,
};

MMOSection.defaultProps = {
  withBackground: undefined,
};
