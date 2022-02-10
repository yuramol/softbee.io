import styled, { css } from 'styled-components';

import { Button } from '../../../legos/Button/Button';
import { theme } from '../../../utils/theme';
import { ImgFluid } from '../../Layout/ImgFluid';

export const LinkWebButton = styled(Button)`
  background-color: ${({ bgColor }) =>
    bgColor || theme.global.colors['accent-1']};

  border-color: ${({ bgColor }) => bgColor || theme.global.colors['accent-1']};
  color: ${({ bgColor }) => (bgColor ? '#fff' : theme.global.colors.brand)};
  ${({ bgColor }) =>
    bgColor &&
    css`
      color: #fff;

      &:hover {
        color: ${bgColor};
        background-color: transparent;
        box-shadow: none;
      }
    `};
`;
export const ImgWebCase = styled(ImgFluid)`
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.05));
  margin: ${({ margin }) => margin};
`;
export const StyledList = styled.li`
  list-style: ${({ dotsList }) => dotsList};
`;
