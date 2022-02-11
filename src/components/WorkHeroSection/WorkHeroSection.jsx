import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Container from '../Layout/Container';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { OurServices } from '../OurServices/OurServices';

export const WorkHeroSection = ({ subtitle, withBackground, whatWeDo }) => {
  const { isDesktopOrTablet } = useBreakpoint();
  return (
    <Box
      pad={{ vertical: 'xlarge' }}
      justify="center"
      height={{ min: isDesktopOrTablet ? 'auto' : '800px' }}
      background={
        withBackground && {
          size: 'auto',
          position: 'bottom right',
          image: !isDesktopOrTablet
            ? 'url(/assets/background-workHeroSection.svg)'
            : undefined,
        }
      }
    >
      <Container>
        <Box
          width={{ max: '50rem' }}
          margin={{ horizontal: 'auto', bottom: 'xlarge' }}
        >
          <Heading
            level={1}
            textAlign="center"
            margin={{ top: 'none', bottom: 'none' }}
          >
            {subtitle}
          </Heading>
        </Box>
        <OurServices services={whatWeDo} />
      </Container>
    </Box>
  );
};

WorkHeroSection.propTypes = {
  subtitle: PropTypes.string.isRequired,
  whatWeDo: PropTypes.arrayOf(PropTypes.object).isRequired,
  withBackground: PropTypes.bool,
};

WorkHeroSection.defaultProps = {
  withBackground: false,
};
