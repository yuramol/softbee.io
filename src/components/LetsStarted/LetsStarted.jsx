import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, FormField, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { TextInput } from '../../legos/TextInput/TextInput';

export const LetsStarted = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 1;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const fontSizeMobile = isMobile ? 3 : 2;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={paddingVariant}
      gap="medium"
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad={!isMobile ? { vertical: 'medium', horizontal: 'xlarge' } : 'large'}
        margin={isMobile ? 'medium' : undefined}
        justify="center"
        alignContent="center"
        height="363px"
        width="1000px"
        style={{
          background: '#104065',
          boxShadow: '0px 0px 75px',
          color: '#F3F3F3',
          borderRadius: '20px',
        }}
        round
        gap="small"
      >
        {isMobile || (
          <Box
            style={{ textAlign: 'center' }}
            pad={
              !isMobile ? { vertical: 'xlarge', horizontal: 'large' } : 'small'
            }
            justify="center"
            align="start"
            fill
          >
            <Heading
              justify="center"
              textAlign="start"
              level={fontSizeMobile}
              color="white"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Hey! Let’s get started. We’re SoftBee,
            </Heading>
            <Heading
              justify="center"
              textAlign="start"
              level={fontSizeMobile}
              color="white"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              and you are? &#128075;
            </Heading>
            <Box pad={{ top: 'large' }} fill>
              <FormField>
                <TextInput placeholder="Lovely Person" />
              </FormField>
            </Box>
          </Box>
        )}
        {isMobile && (
          <Box
            style={{ textAlign: 'center' }}
            pad="medium"
            justify="center"
            align="start"
            fill
          >
            <Heading
              justify="center"
              textAlign="start"
              level={5}
              color="white"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Hey! Let’s get started. We’re SoftBee, and
            </Heading>
            <Heading
              justify="center"
              textAlign="start"
              level={5}
              color="white"
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              you are? &#128075;
            </Heading>
            <Box pad={{ top: 'large' }} fill>
              <FormField>
                <TextInput placeholder="Lovely Person" />
              </FormField>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
