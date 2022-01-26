import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grommet';
import { BoxWithWings } from '../../legos/Box/BoxWithWings';
import { LookingSection } from '../LookingSection/LookingSection';
import { WhatWeDoSection } from '../WhatWeDoSection/WhatWeDoSection';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const BoxLookingSection = ({ titleLooking, textLooking, titleWeDo }) => {
  const { isDesktopOrTablet } = useBreakpoint();

  return (
    <BoxWithWings
      margin={{ top: isDesktopOrTablet ? 'xlarge' : '8.75rem' }}
      isdesktopOrTablet={isDesktopOrTablet}
      height={{ min: !isDesktopOrTablet ? '800px' : undefined }}
    >
      <LookingSection title={titleLooking} text={textLooking} />
      <Box pad={{ vertical: 'xlarge' }}>
        <WhatWeDoSection title={titleWeDo} />
      </Box>
    </BoxWithWings>
  );
};

BoxLookingSection.propTypes = {
  titleLooking: PropTypes.string.isRequired,
  textLooking: PropTypes.string.isRequired,
  titleWeDo: PropTypes.string.isRequired,
};
