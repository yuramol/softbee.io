import React from 'react';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

export const OurTeamAboutTeam = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Box
      height={isMobile ? { min: '450px ' } : { min: '600px' }}
      pad={isMobile ? { vertical: 'xlarge' } : undefined}
      background={{ color: '#fff' }}
    >
      <Box align="center" width="100%">
        <Heading
          level={2}
          color="brand"
          style={{ textAlign: 'center', lineHeight: '100px' }}
        >
          Real peaole creating real results
        </Heading>
      </Box>
      <Box align="center" width="100%">
        <Text
          size="medium"
          color="brand"
          style={{ textAlign: 'center', width: '50%' }}
        >
          Working alone sucks, so we teamed up to kick ass together. We prove
          that distance doesn’t matter when you love what you do, plus we don’t
          have to share biscuits.
        </Text>
      </Box>

      <Grid
        columns={['auto', 'auto', 'auto']}
        pad={{ horizontal: 'xlarge', vertical: 'xlarge' }}
        gap="xlarge"
        style={{ height: 'auto' }}
      >
        <Box
          width="100%"
          height="100%"
          pad={{ bottom: 'calc( 100% - 27.32px)' }}
          style={{
            borderRadius: '25px',

            height: '100%',
            position: 'relative ',
          }}
          background={{
            size: 'cover',
            image: 'url(/assets/ourTeamCat.png)',
          }}
        >
          <Box
            width="100%"
            height="100%"
            justify="end"
            style={{
              position: 'absolute',
              boxShadow: ' 1px 1px 20px rgba(230,230,230,0.3)',
            }}
            background={{
              size: 'cover',
              image: 'url(/assets/Rectangle69.svg)',
            }}
          >
            <Box pad="small">
              <Heading level={5} color="brand" textAlign="bottom">
                Andriy Gavriluk
              </Heading>
              <Text size="medium" color="brand">
                programmer
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>lorem</Box>
        <Box>lorem</Box>
        <Box>lorem</Box>
        <Box>lorem</Box>
        <Box>lorem</Box>
      </Grid>
    </Box>
  );
};
