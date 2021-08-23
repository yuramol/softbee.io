import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';

export const OurTeamWeAreSection = ({ text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Box
      height="auto"
      pad={isTablet ? { horizontal: 'medium' } : { horizontal: 'xlarge' }}
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad={{ horizontal: 'small', vertical: 'xlarge' }}
        gap="medium"
        style={{ height: 'auto' }}
      >
        <Box pad={{ horizontal: 'large' }}>
          <img
            style={{ height: 'auto', width: '100%' }}
            src="/assets/sectionHeader.svg"
            alt="People are creating a website"
          />
        </Box>
        <Box
          width="100%"
          height="auto"
          align="center"
          justify="center"
          pad={
            isTablet
              ? { horizontal: 'small', vertical: 'large' }
              : { left: 'xlarge', right: 'large' }
          }
        >
          <Text
            color="brand"
            size={isMobile ? 'small' : 'medium'}
            align="center"
            style={{ whiteSpace: 'pre-line' }}
          >
            {text}
          </Text>
          <Box
            justify="center"
            align="center"
            height="50px"
            width="194px"
            margin={{ top: '50px' }}
          >
            <ButtonLetsTalk
              label="Let’s talk4   &#128075;"
              color="accent-1"
              primary
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

OurTeamWeAreSection.propTypes = {
  text: PropTypes.string.isRequired,
};
