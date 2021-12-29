import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { Button } from '../../legos/Button/Button';
import { RouterLink } from '../../legos/RouterLink';
import { Text } from '../../legos/typography/Text';
import { theme } from '../../utils/theme';

const displayFlexCenter = css`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  border-radius: 0.313rem;
  width: 3.563rem;
  height: 2.188rem;
  color: ${theme.global.colors['accent-1']};
`;

export const SocialLink = styled(RouterLink)`
  ${displayFlexCenter}
`;

export const StyledText = styled(Text)`
  cursor: pointer;
  &:hover {
    color: ${theme.global.colors['accent-1']};
  }
`;

export const StyledLink = styled(Link)`
  ${displayFlexCenter}
`;
