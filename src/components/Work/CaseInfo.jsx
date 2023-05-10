import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useBreakpoint } from '../../utils/useBreakpoint';
import Container from '../Layout/Container';
import { theme } from '../../utils/theme';

const StyledReactMarkdown = styled(ReactMarkdown)`
  text-align: start;
  font-size: ${({ size }) => size};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  color: ${({ color }) => color};
  & > ul {
    padding-left: 20px;
    & > li:not(:first-child) {
      margin-top: 10px;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.global.colors['accent-1']};
    transition: 0.2s color ease-in-out;
    &:hover {
      color: ${theme.global.colors.brand};
    }
  }
`;

export const WebCaseInfo = ({
  data: {
    color,
    preview: { textInfo },
  },
}) => {
  const { isSmall } = useBreakpoint();
  return (
    <>
      <Container pad={{ vertical: 'xlarge' }} align="center">
        {/* <ImgFluid
          width={isSmall ? '100px' : '150px'}
          src={`/${logo}`}
          alt={alt}
        /> */}
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
    }),
  }).isRequired,
};
