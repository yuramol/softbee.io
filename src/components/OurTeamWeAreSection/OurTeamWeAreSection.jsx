import React from 'react';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Text } from '../../legos/typography/Text';

export const OurTeamWeAreSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Box
      height={isMobile ? { min: '450px ' } : { min: '600px' }}
      pad={{ horizontal: 'large' }}
    >
      <Grid
        columns={['1fr', '1fr']}
        pad={{ horizontal: 'small', vertical: 'xlarge' }}
        gap="medium"
        style={{ height: 'auto' }}
      >
        <Box>
          <img
            style={{ height: 'auto', width: '100%' }}
            src="/assets/sectionHeader.svg"
            alt=" People create a website "
          />
        </Box>
        <Box width="100%" height="auto" justify="center">
          <Text
            pad={{ horizontal: 'large' }}
            color="brand"
            size="medium"
            align="center"
            style={{ textAlign: 'center' }}
          >
            We’re designers, developers, illustrators, copywriters and coders,
            but we also have pure gold ideas. iPhone games, time-keeping apps,
            dog-backpacks, too many tshirt slogans to keep track of. One day
            we’ll be rich, you’d best work with us while we need the money.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
