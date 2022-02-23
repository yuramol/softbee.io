import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { ImgFluid } from '../../../Layout/ImgFluid';
import { useBreakpoint } from '../../../../utils/useBreakpoint';
import Container from '../../../Layout/Container';

const StyledReactMarkdown = styled(ReactMarkdown)`
  text-align: start;
  font-size: ${({ size }) => size};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: ${({ color }) => color};
  & > ul {
    padding-left: 20px;
    & > li:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const WebCaseInfo = ({
  data: {
    logo,
    alt,
    color,
    preview: { textInfo },
  },
}) => {
  const { isSmall } = useBreakpoint();
  return (
    <>
      <Container pad={{ vertical: 'xlarge' }} align="center">
        <ImgFluid
          width={isSmall ? '100px' : '150px'}
          src={`/${logo}`}
          alt={alt}
        />
        <StyledReactMarkdown color={color} size={isSmall ? '1rem' : '1.5rem'}>
          {textInfo}
        </StyledReactMarkdown>
      </Container>
    </>
  );
};

WebCaseInfo.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      textInfoFirst: PropTypes.string,
      textInfoSecond: PropTypes.array,
    }),
  }).isRequired,
};
