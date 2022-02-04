import React from 'react';
import PropTypes from 'prop-types';
import {
  BoxPositionRelative,
  SvgHalfCircle,
  SvgHero,
  SvgTriangleRounded,
} from '../../styled';
import { useBreakpoint } from '../../../../utils/useBreakpoint';

export const MobileCaseWrapper = ({
  children,
  color,
  isSvgHalfCircle,
  isSvgTriangleRounded,
  isSvgHero,
  withBackground,
  position: {
    top,
    left,
    right,
    bottom,
    sTop,
    sLeft,
    sRight,
    sBottom,
    transform,
    sTransform,
  },
}) => {
  const { isDesktopOrTablet } = useBreakpoint();
  if (isSvgHalfCircle) {
    return (
      <BoxPositionRelative
        background={
          withBackground && isDesktopOrTablet ? 'rgb(240, 246, 244)' : undefined
        }
      >
        {isDesktopOrTablet ? null : (
          <>
            <SvgHalfCircle
              top={top}
              left={left}
              bottom={bottom}
              right={right}
              color={color}
              transform={transform}
            />
            <SvgHalfCircle
              top={sTop}
              left={sLeft}
              bottom={sBottom}
              right={sRight}
              color={color}
              transform={sTransform}
            />
          </>
        )}
        {children}
      </BoxPositionRelative>
    );
  }
  if (isSvgTriangleRounded) {
    return (
      <BoxPositionRelative
        background={
          withBackground && isDesktopOrTablet ? 'rgb(240, 246, 244)' : undefined
        }
      >
        {isDesktopOrTablet ? null : (
          <SvgTriangleRounded
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            color={color}
            transform={transform}
          />
        )}
        {children}
      </BoxPositionRelative>
    );
  }
  if (isSvgHero) {
    return (
      <BoxPositionRelative
        background={
          withBackground && isDesktopOrTablet ? 'rgb(240, 246, 244)' : undefined
        }
      >
        {isDesktopOrTablet ? null : (
          <SvgHero
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            color={color}
            transform={transform}
          />
        )}
        {children}
      </BoxPositionRelative>
    );
  }
  return null;
};

MobileCaseWrapper.propTypes = {
  color: PropTypes.string.isRequired,
  isSvgHalfCircle: PropTypes.bool,
  isSvgTriangleRounded: PropTypes.bool,
  isSvgHero: PropTypes.bool,
  withBackground: PropTypes.bool,
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    transform: PropTypes.string,
    sTransform: PropTypes.string,
  }),
};

MobileCaseWrapper.defaultProps = {
  isSvgHalfCircle: false,
  isSvgTriangleRounded: false,
  isSvgHero: false,
  position: undefined,
  withBackground: false,
};
