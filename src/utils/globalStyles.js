import { css } from 'styled-components';

export const hoveredLink = color =>
  css`
    &:hover {
      color: ${color};
    }
  `;

export const flexImgWrapper = bottom =>
  css`
    position: relative;
    padding-bottom: ${bottom};
  `;
