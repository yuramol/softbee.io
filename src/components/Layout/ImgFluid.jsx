import styled from 'styled-components';

export const ImgFluid = styled.img`
  max-width: ${({ mobileWidth }) => mobileWidth || '100%'};
  height: ${({ height }) => height || 'auto'};
`;
