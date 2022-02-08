import styled from 'styled-components';

export const ImgFluid = styled.img`
  max-width: ${({ mobileWidth }) => mobileWidth || '100%'};
  width: ${({ width }) => width};
  height: ${({ height }) => height || 'auto'};
`;
