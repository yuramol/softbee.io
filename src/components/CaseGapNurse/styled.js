import styled from 'styled-components';

import { Grid } from 'grommet';

export const GridInfo = styled(Grid)`
  width: ${({ isMobile }) => (isMobile ? '100%' : undefined)};
`;
