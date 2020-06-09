import React from 'react';
import { Box, Grid, Text, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Button } from '../../legos/Button/Button';

export const HomeHeroSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const rowsCount = size === 'small' ? 2 : 1;
  return (
    <Grid
      columns={{ count: columnsCount, size: 'auto' }}
      rows={{ count: rowsCount, size: 'auto' }}
      gap="small"
      pad="xlarge"
    >
      <Box justify="center" align="start">
        <Box pad={{ bottom: 'small' }}>
          <Heading level={1} color="brand">
            Your partners in new products creating
          </Heading>
        </Box>
        <Box width="300px" pad={{ bottom: 'large' }}>
          <Text color="brand" style={{ lineHeight: '32px' }}>
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
      <Box align="center">
        <img src="./assets/sectionHeader.svg" alt="Gatsby Scene" />
      </Box>
    </Grid>
  );
};
