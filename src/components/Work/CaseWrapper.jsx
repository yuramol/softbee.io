import React from 'react';

import { Box } from 'grommet';
import PropTypes from 'prop-types';

import { useBreakpoint } from '../../utils/useBreakpoint';

export const CaseWrapper = ({
  sizePad,
  firstColor,
  secondColor,
  urlImg,
  withBackground,
  position,
  children,
  ...props
}) => {
  const url = `url(${urlImg})`;
  const { isDesktopOrTablet } = useBreakpoint();

  return (
    <Box
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      pad={{ vertical: sizePad }}
      height={{ min: isDesktopOrTablet ? undefined : '800px' }}
      background={
        withBackground
          ? {
              size: 'auto',
              position: `${position}`,
              image: !isDesktopOrTablet ? url : undefined,

              color: `${firstColor}`,
            }
          : {
              color: `${secondColor}`,
            }
      }
    >
      {children}
    </Box>
  );
};

CaseWrapper.propTypes = {
  sizePad: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  withBackground: PropTypes.bool,
};

CaseWrapper.defaultProps = {
  withBackground: undefined,
};
