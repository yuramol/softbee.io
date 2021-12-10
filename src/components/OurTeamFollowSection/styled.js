import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { Grid } from 'grommet';
import { theme } from '../../utils/theme';

export const StyledMarkdown = styled(ReactMarkdown)`
  a {
    color: white;
  }
`;

export const StyledGrid = styled(Grid)`
  background-color: ${theme.global.colors.brand};
  box-shadow: ${({ isMobile }) =>
    isMobile ? '10px 10px 2px 1px #fae79f' : '25px 25px 2px 1px #fae79f'};
  border-radius: 20px;
`;
