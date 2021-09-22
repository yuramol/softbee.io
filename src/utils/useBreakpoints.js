import { theme } from './theme';

const nameBreakpoints = Object.keys(theme.global.breakpoints);

// maxBreakpoints analog media query max-width.
export const maxBreakpoints = (breakpointName, size) => {
  const breakpointNameKey = nameBreakpoints.indexOf(breakpointName);
  const breakpointsFirstOnCurrent = nameBreakpoints.slice(
    0,
    breakpointNameKey + 1,
  );
  return breakpointsFirstOnCurrent.includes(size);
};
