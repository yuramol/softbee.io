import styled from 'styled-components';
import { Box } from 'grommet';
import { Button } from '../../legos/Button/Button';

export const WrapperWizard = styled(Box)`
  box-shadow: ${props => props.boxShadow};
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const NavigationButton = styled(Button)`
  flex-shrink: 0;
  &:hover {
    color: #fff;
  }
`;
