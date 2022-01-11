import { ResponsiveContext } from 'grommet';
import { useContext } from 'react';
import { theme } from './theme';
import { maxBreakpoints } from './useBreakpoints';

/**
 * @typedef {Object} Breakpoints
 * @property {boolean} isBMobile
 * @property {boolean} isDesktopOrTablet
 * @property {boolean} isExtraSmall
 * @property {boolean} isLarge
 * @property {boolean} isMobile
 * @property {boolean} isSTablet
 * @property {boolean} isSmall
 * @property {boolean} isTablet
 * @property {boolean} isTabletOrMobile
 * @property {boolean} isXSmall
 */

/**
 * @return {Breakpoints} breakpoints
 * */
export const useBreakpoint = () => {
  const size = useContext(ResponsiveContext);
  const createBreakpoint = name => maxBreakpoints(name, size);
  const points = {};
  Object.keys(theme.global.breakpoints).forEach(point => {
    points[`is${point[0].toUpperCase() + point.slice(1)}`] = createBreakpoint(
      point,
    );
  });
  return points;
};
