import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

export const OurTeamHeroSection = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' });

  const columnsCount = isMobile ? 1 : 2;

  return (
    <Box
      height="auto"
      pad={{ vertical: 'xlarge' }}
      background={
        size !== 'small' && withBackground
          ? {
              size: 'small',
              position: 'bottom right',
              image: isMobile
                ? undefined
                : 'url(/assets/background-ourTeam.svg)',
            }
          : {
              color: '#FFFFFF',
            }
      }
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto ' }}
        gap="small"
        pad={isMobile ? { horizontal: 'large' } : { horizontal: 'xlarge' }}
        style={{ height: 'auto' }}
      >
        <Box
          justify="center"
          pad={isTablet ? { horizontal: 'small' } : { horizontal: 'large' }}
          style={isMobile ? { order: '1' } : { order: '0' }}
        >
          <Heading
            level={1}
            color="brand"
            style={
              isMobile
                ? { fontWeight: '700', fontSize: '24px', textAlign: 'center' }
                : { fontWeight: '700' }
            }
          >
            About our team
          </Heading>
          <Text
            size={isMobile ? 'small' : 'medium'}
            color="brand"
            style={isMobile ? { textAlign: 'center' } : undefined}
          >
            We help companies discover what makes them unique and channel it
            into a memorable experience that outsells and outshines their
            competition online.
          </Text>
        </Box>

        <Box
          justify="center"
          style={isMobile ? { order: '0' } : { order: '1' }}
        >
          <img
            style={{ height: 'auto', width: '100%' }}
            src="/assets/ourTeamHerosection.svg"
            alt="People developed"
          />
        </Box>
      </Grid>
    </Box>
  );
};
OurTeamHeroSection.propTypes = {
  withBackground: PropTypes.bool,
};

OurTeamHeroSection.defaultProps = {
  withBackground: undefined,
};
