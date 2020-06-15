import React from 'react';
import { Box, FormField } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { TextInput } from '../../legos/TextInput/TextInput';

export const LetsStarted = () => (
  <Box
    direction="row-responsive"
    justify="center"
    align="center"
    pad="xlarge"
    gap="medium"
  >
    <Box
      direction="row"
      pad={{ horizontal: 'xlarge' }}
      justify="center"
      alignContent="center"
      background="#104065"
      height="363px"
      width="1000px"
      style={{
        boxShadow: '0px 0px 75px',
        color: '#F3F3F3',
        borderRadius: '20px',
      }}
      round
      gap="small"
    >
      <Box
        style={{ textAlign: 'start' }}
        justify="center"
        margin={{ bottom: 'small', horizontal: 'medium' }}
      >
        <Box pad={{ bottom: 'medium' }}>
          <Heading
            level={2}
            color="white"
            margin="xsmall"
            style={{ fontWeight: '600' }}
          >
            Hey! Let’s get started. We’re SoftBee, and you are? &#128075;
          </Heading>
        </Box>
        <Box pad={{ top: 'large' }}>
          <FormField>
            <TextInput placeholder="Lovely Person" />
          </FormField>
        </Box>
      </Box>
    </Box>
  </Box>
);
