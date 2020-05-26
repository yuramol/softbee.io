import styled from 'styled-components';
import { TextInput } from 'grommet';

export const StyledTextInput = styled(TextInput)`
  font-weight: 300;
  padding: 4px;
  padding-left: 15px;
  border: none;
  ::placeholder {
    color: #ffffff;
    font-size: 24px;
    line-height: 28px;
  }
`;
