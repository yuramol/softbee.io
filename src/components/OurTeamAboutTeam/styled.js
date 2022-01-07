import styled from 'styled-components';

import { Box, Grid } from 'grommet';
import { flexImgWrapper } from '../../utils/globalStyles';

export const CardTeam = styled(Grid)`
  width: 100%;
  overflow: hidden;
  border-radius: ${({ isMobileSmall }) =>
    isMobileSmall ? '0.9rem' : '1.25rem'};

  &::before {
    content: '';
    z-index: 1;
    grid-column: 1;
    grid-row: 1;
    user-select: none;
    background: linear-gradient(
      180deg,
      rgba(16, 64, 101, 0) 64.06%,
      #104065 89.06%
    );
  }
`;

export const CardTeamImageWrapper = styled(Box)`
  ${({ bottomFlex }) => bottomFlex && flexImgWrapper(bottomFlex)}
  grid-column: 1;
  grid-row: 1;
`;

export const CardTeamFooter = styled(Box)`
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
`;
