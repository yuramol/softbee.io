import styled from 'styled-components';
import { TextInput as LibTextInput } from 'grommet';

export const TextInput = styled(LibTextInput)`
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
