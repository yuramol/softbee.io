import React from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';
import { useMediaQuery } from 'react-responsive';

export const OurTeam = ({ withBackground }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Box
      height={{ min: '695px' }}
      justify="center"
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
    />
  );
};

OurTeam.propTypes = {
  withBackground: PropTypes.bool,
};

OurTeam.defaultProps = {
  withBackground: undefined,
};
