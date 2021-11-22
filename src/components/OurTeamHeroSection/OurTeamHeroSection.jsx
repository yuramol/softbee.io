import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import Container from '../Layout/Container';

export const OurTeamHeroSection = ({ title, text, withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('bMobile', size);
  const isTablet = maxBreakpoints('tabletOrMobile', size);
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
              color: '#fff',
            }
      }
    >
      <Container>
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
              margin={{ vertical: '5px' }}
            >
              {title}
            </Heading>
            <Text
              size={isMobile ? 'small' : 'medium'}
              color="brand"
              style={{
                textAlign: isMobile ? 'center' : 'left',
                whiteSpace: 'pre-line',
              }}
            >
              {text}
            </Text>
          </Box>

          <Box
            justify="center"
            style={isMobile ? { order: '0' } : { order: '1' }}
          >
            <img
              style={{ height: 'auto', width: '100%' }}
              src="/assets/ourTeamHerosection.svg"
              alt="A group of people are developing a web site"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
OurTeamHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

OurTeamHeroSection.defaultProps = {
  withBackground: undefined,
};
