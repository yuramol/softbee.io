import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContext } from 'grommet';

import { BoxSection } from './styled';
import { LookingSection } from '../LookingSection/LookingSection';
import { WhatWeDoSection } from '../WhatWeDoSection/WhatWeDoSection';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const BoxLookingSection = ({ titleLooking, textLooking, titleWeDo }) => {
  const size = React.useContext(ResponsiveContext);
  const isdesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  return (
    <BoxSection
      margin={{ top: isdesktopOrTablet ? 'xlarge' : '8.75rem' }}
      isdesktopOrTablet={isdesktopOrTablet}
      height={{ min: !isdesktopOrTablet && '800px' }}
    >
      <LookingSection title={titleLooking} text={textLooking} />
      <WhatWeDoSection title={titleWeDo} />
    </BoxSection>
  );
};

BoxLookingSection.propTypes = {
  titleLooking: PropTypes.string.isRequired,
  textLooking: PropTypes.string.isRequired,
  titleWeDo: PropTypes.string.isRequired,
};
