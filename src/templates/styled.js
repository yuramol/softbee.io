import styled from 'styled-components';
import { Box, Grid } from 'grommet';
import { flexImgWrapper } from '../utils/globalStyles';

export const BlogItem = styled(Box)`
  max-width: 364px;
  width: 100%;
  margin: 0 auto;
  ${({ bottomFlex }) => bottomFlex && flexImgWrapper(bottomFlex)}
`;

export const GridInfo = styled(Grid)`
  width: ${({ isMobile }) => (isMobile ? '100%' : undefined)};
`;
