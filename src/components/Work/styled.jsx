import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import PropTypes from 'prop-types';

export const StyledSvg = styled.svg`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: ${({ transform }) => transform};
  z-index: -10;
`;

export const BoxPositionRelative = styled(Box)`
  position: ${({ position }) => position || 'relative'};
`;

export const SvgHero = ({ color, ...props }) => {
  return (
    <StyledSvg
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      width="750"
      height="450"
      viewBox="0 0 750 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M571.461 154.756C638.415 29.6915 749.564 0 749.564 0V450H0C39.2498 375.289 99.6588 308.068 209.992 269.239C319.792 230.598 504.507 279.821 571.461 154.756Z"
        fill={`${color}`}
      />
      <path
        d="M597.812 184.538C650.978 76.5606 749.564 61.4825 749.564 61.4825L750 450L154.36 450C185.527 385.497 233.496 327.46 321.108 293.936C408.297 260.574 544.646 292.515 597.812 184.538Z"
        fill={`${color}`}
      />
    </StyledSvg>
  );
};

export const SvgHalfCircle = ({ color, ...props }) => {
  return (
    <StyledSvg
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      width="116"
      height="530"
      viewBox="0 0 175 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M175 800L175 0C128.589 51.9665 92.9392 103.32 66.3078 153.5C-88.9289 446.001 62.2786 698.597 175 800Z"
        fill={color}
      />
    </StyledSvg>
  );
};

export const SvgTriangleRounded = ({ color, ...props }) => {
  return (
    <StyledSvg
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      width="658"
      height="721"
      viewBox="0 0 730 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0C0 0 260.775 0.000167847 700 0C603.5 515.5 0 800 0 800V0Z"
        fill={color}
      />
      <path
        opacity="0.2"
        d="M0 0C0 0 271.951 0.000167847 730 0C629.364 515.5 0 800 0 800V0Z"
        fill={color}
      />
    </StyledSvg>
  );
};

SvgHero.propTypes = {
  color: PropTypes.string.isRequired,
};

SvgHalfCircle.propTypes = {
  color: PropTypes.string.isRequired,
};

SvgTriangleRounded.propTypes = {
  color: PropTypes.string.isRequired,
};
