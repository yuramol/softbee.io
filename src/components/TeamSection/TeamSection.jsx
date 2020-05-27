import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { Link } from '../../legos/Link';
import { TextColor, textDark, cyan } from '../../utils/colors';

const TeamSection = () => (
  <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
    <Box align="center">
      <img
        src="./assets/section.svg"
        alt="Drawn man working on laptop"
      />
    </Box>
    <Box justify="center" align="start">
      <Box>
        <Heading level={2} color={TextColor}>
          We love taking products from vision to reality.
        </Heading>
      </Box>
      <Box width="491px" pad={{ bottom: 'large' }}>
        <Box pad={{ bottom: 'medium' }}>
          <Text size="medium" color={textDark}>
            Somethings about how we work.We do all sorts of programming:
          </Text>
          <Text size="medium" color={textDark}>
            Web, mobile, backend, desktop development.{' '}
          </Text>
          <Text size="medium" color={textDark}>
            JS is our lovest language.Blala something more.
          </Text>
        </Box>
        <Box pad={{ bottom: 'medium' }}>
          <Text size="medium" color={textDark}>
            re a team of passionated mobile and web developers who love y
            do.Also we love being on the same page with our clients and to
            deliver real cases to users.
          </Text>
        </Box>
        <Link fill to="our-team" color={cyan} primary>
          Meet our team &#128074;
        </Link>
      </Box>
    </Box>
  </Grid>
);

export default TeamSection;
