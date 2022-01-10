import React from 'react';
import { ResponsiveContext } from 'grommet';

import { maxBreakpoints } from './useBreakpoints';

export const useBreakpoint = () => {
  const size = React.useContext(ResponsiveContext);

  const isExtraSmall = maxBreakpoints('extraSmall', size);
  const isXSmall = maxBreakpoints('xSmall', size);
  const isMobile = maxBreakpoints('small', size);
  const isBMobile = maxBreakpoints('bMobile', size);
  const isSTablet = maxBreakpoints('sTablet', size);
  const isTablet = maxBreakpoints('tablet', size);
  const isTabletOrMobile = maxBreakpoints('tabletOrMobile', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  return {
    isExtraSmall,
    isXSmall,
    isBMobile,
    isMobile,
    isSTablet,
    isTablet,
    isTabletOrMobile,
    isDesktopOrTablet,
  };
};
