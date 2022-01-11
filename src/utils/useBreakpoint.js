import React from 'react';
import { ResponsiveContext } from 'grommet';
import { theme } from './theme';

import { maxBreakpoints } from './useBreakpoints';

export const useBreakpoint = () => {
  const size = React.useContext(ResponsiveContext);
  const createBreakpoint = name => {
    return maxBreakpoints(name, size);
  };
  const points = {};
  Object.keys(theme.global.breakpoints).forEach(point => {
    points[`is${point[0].toUpperCase() + point.slice(1)}`] = createBreakpoint(
      point,
    );
  });

  // isBMobile: false
  // isDesktopOrTablet: false
  // isExtraSmall: false
  // isLarge: false
  // isMobile: false
  // isSTablet: false
  // isSmall: false
  // isTablet: false
  // isTabletOrMobile: false
  // isXSmall: false

  return points;
};
