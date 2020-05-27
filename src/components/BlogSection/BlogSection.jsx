import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { Link } from '../../legos/Link';
import { TextColor, textDark, cyan } from '../../utils/colors';

const BlogSection = () => (
  <Box>
  <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad={{horizontal: "xlarge", top: "xlarge"}}>
    <Box justify="center" align="start">
      <Box width="491px" pad={{ bottom: 'large' }}>
        <Box pad={{ bottom: 'small' }}>
          <Heading level={4} color={TextColor} margin={{ vertical: 'small' }}>
            How to write on Java?
          </Heading>
          <Text size="medium" color={textDark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu purus
            sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu purus
            sit adipiscing....
            <Link fill to="our-team" color={cyan} primary>
              {'  '}
              read more
            </Link>
          </Text>
        </Box>
        <Box pad={{ bottom: 'medium' }}>
          <Heading level={4} color={TextColor} margin={{ vertical: 'small' }}>
            What if do something?
          </Heading>
          <Text size="medium" color={textDark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu purus
            sit nulla platea pellentesque pretium. Facilisi tellus rutrum eu mi
            quam mauris dui orci ante. Faucibus elit, imperdiet mi maecenas
            egestas semper mauris ultricies vitae....
            <Link fill to="our-team" color={cyan} primary>
              {' '}
              read more
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
    <Box align="center">
      <img src="./assets/writeOnJava.png" alt="On laptop open code editor" />
    </Box>
  </Grid>
  <Box justify="center" align="center">
    <Link to="gapnurse-case-study" color={TextColor}>
         <Heading level={2} color={TextColor}>See our blog</Heading>
    </Link>
  </Box>
  </Box>
);

export default BlogSection;
