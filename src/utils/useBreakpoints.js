import { theme } from './theme';

const breakpoints = Object.keys(theme.global.breakpoints);

export const maxBreakpoints = (breakpointName, size) => {
  const breakpointsBeforeNameKey = breakpoints.indexOf(breakpointName);
  const breakpointsBeforeName = breakpoints.slice(
    0,
    breakpointsBeforeNameKey + 1,
  );
  return breakpointsBeforeName.includes(size);
};
