import { Grid } from 'grommet';
import styled from 'styled-components';

export const GridInfo = styled(Grid)`
  width: ${({ isMobile }) => (isMobile ? '100%' : undefined)};
`;
