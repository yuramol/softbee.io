import React from 'react';
import { useMediaQuery } from 'react-responsive';

import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const BlogSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isTablet = useMediaQuery({ query: '(max-width: 1050px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const fontSizeVariant = isMobile ? 6 : 2;
  const textAlignVariant = isMobile ? 'center' : 'start';
  const paddingVariant = isMobile
    ? 'large'
    : { horizontal: 'xlarge', top: 'xlarge' };

  return (
    <Box
      justify="center"
      height={isTablet ? undefined : '800px'}
      background={
        withBackground
          ? {
              color: '#F0F6F4',
            }
          : undefined
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        gap="small"
        pad={paddingVariant}
        justify="center"
      >
        <Box justify="center">
          <Box
            pad={isTablet ? { horizontal: 'xsmall', top: 'xlarge' } : 'large'}
            align="center"
          >
            <Box pad={{ bottom: 'small' }} align={textAlignVariant}>
              <Heading
                textAlign={textAlignVariant}
                level={isMobile ? 3 : 2}
                color="brand"
                margin={{ vertical: 'small' }}
                style={isMobile ? { fontWeight: '400' } : undefined}
              >
                How to write on Java?
              </Heading>
              <Text size="medium" color="text-dark-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                purus sit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Arcu purus sit adipiscing....
                <RouterLink to="our-team">
                  {'  '}
                  read more
                </RouterLink>
              </Text>
            </Box>
            {isTablet || (
              <Box pad={{ bottom: 'medium' }}>
                <Heading level={4} color="brand" margin={{ vertical: 'small' }}>
                  What if do something?
                </Heading>
                <Text size="medium" color="text-dark-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  purus sit nulla platea pellentesque pretium. Facilisi tellus
                  rutrum eu mi quam mauris dui orci ante. Faucibus elit,
                  imperdiet mi maecenas egestas semper mauris ultricies
                  vitae....
                  <RouterLink to="our-team"> read more</RouterLink>
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        {!isMobile && (
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="/assets/writeOnJava.png"
              alt="On laptop open code editor"
            />
          </Box>
        )}
      </Grid>
      <Box
        justify="start"
        align="center"
        pad={isTablet ? { bottom: 'xlarge' } : undefined}
      >
        <RouterLink to="blog">
          <Heading margin="large" level={fontSizeVariant}>
            See our blog
          </Heading>
        </RouterLink>
      </Box>
    </Box>
  );
};

BlogSection.propTypes = {
  withBackground: PropTypes.bool,
};

BlogSection.defaultProps = {
  withBackground: undefined,
};
