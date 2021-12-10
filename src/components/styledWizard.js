import styled, { css } from 'styled-components';
import { Button, Grid, Text } from 'grommet';

export const StyledGrid = styled(Grid)`
  width: 100%;
  background-color: #104065;
  box-shadow: ${props => props.boxShadow};
  color: #fae79f;
  border-radius: ${props => props.borderRadius};
  height: ${({ inModal }) => (inModal ? '100%' : undefined)};
  max-width: ${({ maxWidth }) => maxWidth};
`;
export const StyledHeading = styled(Text)`
  font-weight: 600;
  ${props =>
    props.preLine &&
    css`
      white-space: pre-line;
    `}
`;
export const NavigationButton = styled(Button)`
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;
export const StepButton = styled(Button)`
  width: 66px;
  height: 0;
  margin: 0 7px;
  padding: 0;

  &:disabled {
    border-color: #fff;
    opacity: 1;
  }
`;

export const headingSizes = {
  large: '42px',
  medium: '30px',
  small: '22px',
};
