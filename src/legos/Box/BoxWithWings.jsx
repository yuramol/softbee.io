import { Box } from 'grommet';
import styled, { css } from 'styled-components';

export const BoxWithWings = styled(Box)`
  position: relative;
  ${({ isdesktopOrTablet }) =>
    !isdesktopOrTablet &&
    css`
      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        height: 100%;
        width: 8%;
        max-width: 175px;
      }

      &::after {
        right: 0;
        background: url(/assets/decorative-right.svg) center no-repeat;
        background-size: contain;
      }

      &::before {
        left: 0;
        background: url(/assets/decorative-left.svg) center no-repeat;
        background-size: contain;
      }
    `}
`;
