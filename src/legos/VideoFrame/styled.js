import { Box } from 'grommet';
import styled from 'styled-components';

export const VideoWrapper = styled(Box)`
  position: relative;
  display: block;
  width: ${({ isSmall }) => (isSmall ? '100%' : '70%')};
  padding-top: calc(9 / 16 * 100%);
  margin-top: 3rem;
  margin: 3rem auto 0 auto;
`;
export const VideoFrame = styled('iframe')`
  position: absolute;
  top: 0;
  left: 0;
  border: 10px;
  width: 100%;
  height: 100%;
`;
