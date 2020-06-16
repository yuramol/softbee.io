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
  const rowsCount = size === 'small' ? 1 : 1;
  const isTablet = useMediaQuery({ query: '(max-width: 1050px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const fontSizeVariant = isMobile ? 6 : 2;
  const paddingVariant = isMobile ? 'large' : 'xlarge';

  return (
    <Box
      justify="center"
      height={isTablet || '800px'}
      background={
        withBackground && {
          color: '#F0F6F4',
        }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        rows={{ count: rowsCount, size: 'auto' }}
        gap="small"
        pad={paddingVariant}
        justify="center"
      >
        <Box justify="center" align="start">
          <Box pad={isTablet ? 'xsmall' : 'large'}>
            <Box pad={{ bottom: 'small' }}>
              <Heading
                level={isMobile ? 3 : 2}
                color="brand"
                margin={{ vertical: 'small' }}
                style={isMobile && { fontWeight: '400' }}
              >
                How to write on Java?
              </Heading>
              <Text size="medium" color="text-dark-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                purus sit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Arcu purus sit adipiscing....
                <RouterLink fill to="our-team" primary>
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
                  <RouterLink fill to="our-team" primary>
                    {' '}
                    read more
                  </RouterLink>
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        {isMobile || (
          <Box align="center" justify="center">
            <img
              style={{ height: 'auto', width: '100%' }}
              src="./assets/writeOnJava.png"
              alt="On laptop open code editor"
            />
          </Box>
        )}
      </Grid>
      <Box justify="start" align="center">
        <RouterLink to="blog" primary>
          <Heading margin="large" level={fontSizeVariant} primary>
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
