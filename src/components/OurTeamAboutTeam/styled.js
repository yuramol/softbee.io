import styled from 'styled-components';

import { Box, Grid } from 'grommet';
import { flexImgWrapper } from '../../utils/globalStyles';

export const CardTeam = styled(Grid)`
  width: 100%;
  overflow: hidden;
  box-shadow: rgba(200, 200, 200, 0.3) 0 0 22px;
  border-radius: 20px;

  &::before {
    content: '';
    z-index: 1;
    grid-column: 1;
    grid-row: 1;
    user-select: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 56.77%,
      rgba(255, 255, 255, 0.650602) 78.12%,
      #ffffff 100%
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
