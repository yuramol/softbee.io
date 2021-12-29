import { Box } from 'grommet';
import styled from 'styled-components';

export const BoxOrder = styled(Box)`
  order: ${({ order }) => order && order};
`;
