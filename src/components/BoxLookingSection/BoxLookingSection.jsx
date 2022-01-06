import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContext } from 'grommet';

import { BoxWithWings } from '../../legos/Box/BoxWithWings';
import { LookingSection } from '../LookingSection/LookingSection';
import { WhatWeDoSection } from '../WhatWeDoSection/WhatWeDoSection';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const BoxLookingSection = ({ titleLooking, textLooking, titleWeDo }) => {
  const size = React.useContext(ResponsiveContext);
  const isdesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  return (
    <BoxWithWings
      margin={{ top: isdesktopOrTablet ? 'xlarge' : '8.75rem' }}
      isdesktopOrTablet={isdesktopOrTablet}
      height={{ min: !isdesktopOrTablet ? '800px' : undefined }}
    >
      <LookingSection title={titleLooking} text={textLooking} />
      <WhatWeDoSection title={titleWeDo} />
    </BoxWithWings>
  );
};

BoxLookingSection.propTypes = {
  titleLooking: PropTypes.string.isRequired,
  textLooking: PropTypes.string.isRequired,
  titleWeDo: PropTypes.string.isRequired,
};
