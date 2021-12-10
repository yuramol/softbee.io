import styled from 'styled-components';

import { Link } from 'gatsby';
import { Text } from '../legos/typography/Text';
import { Button } from '../legos/Button/Button';
import { TextInput } from '../legos/TextInput/TextInput';
import { theme } from '../utils/theme';

export const StyledButton = styled(Button)`
  border-radius: 5px;
  border: 2px solid ${theme.global.colors['accent-1']};
  width: 57px;
  height: 35px;
  color: ${theme.global.colors['accent-1']};

  &:hover {
    background-color: ${theme.global.colors['accent-1']};
    color: ${theme.global.colors.brand};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const StyledFooterInput = styled(TextInput)`
  line-height: 26px;
`;

export const StyledText = styled(Text)`
  text-decoration: underline;
  color: #25bbc5;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
