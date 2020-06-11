import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { RouterLink } from '../../legos/RouterLink';

export const BlogSection = ({ withBackground }) => (
  <Box
    justify="center"
    height="800px"
    background={
      withBackground && {
        color: '#F0F6F4',
      }
    }
  >
    <Grid
      columns={{ count: 2, size: 'auto' }}
      gap="small"
      pad={{ horizontal: 'xlarge', top: 'xlarge' }}
      justify="center"
    >
      <Box justify="center" align="start">
        <Box pad="large">
          <Box pad={{ bottom: 'small' }}>
            <Heading level={4} color="brand" margin={{ vertical: 'small' }}>
              How to write on Java?
            </Heading>
            <Text size="medium" color="text-dark-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              purus sit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Arcu purus sit adipiscing....
              <RouterLink fill to="our-team" color="accent-2" primary>
                {'  '}
                read more
              </RouterLink>
            </Text>
          </Box>
          <Box pad={{ bottom: 'medium' }}>
            <Heading level={4} color="brand" margin={{ vertical: 'small' }}>
              What if do something?
            </Heading>
            <Text size="medium" color="text-dark-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              purus sit nulla platea pellentesque pretium. Facilisi tellus
              rutrum eu mi quam mauris dui orci ante. Faucibus elit, imperdiet
              mi maecenas egestas semper mauris ultricies vitae....
              <RouterLink fill to="our-team" color="accent-2" primary>
                {' '}
                read more
              </RouterLink>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box align="center" justify="center">
        <img src="./assets/writeOnJava.png" alt="On laptop open code editor" />
      </Box>
    </Grid>
    <Box justify="center" align="center">
      <RouterLink to="blog" color="brand">
        <Heading level={2} color="brand">
          See our blog
        </Heading>
      </RouterLink>
    </Box>
  </Box>
);

BlogSection.propTypes = {
  withBackground: PropTypes.bool,
};

BlogSection.defaultProps = {
  withBackground: undefined,
};
