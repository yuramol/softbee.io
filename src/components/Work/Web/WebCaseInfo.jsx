import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'grommet';
import styled from 'styled-components';
import { Paragraph } from '../../../legos/typography/Paragraph';
import { ImgFluid } from '../../Layout/ImgFluid';
import { useBreakpoint } from '../../../utils/useBreakpoint';
import Container from '../../Layout/Container';
import { StyledList } from './styled';

const ListItem = styled(List)`
  color: ${({ color }) => color};
`;

export const WebCaseInfo = ({
  data: {
    logo,
    alt,
    color,
    preview: { textInfoFirst, textInfoSecond },
  },
}) => {
  const { isDesktopOrTablet, isMobile } = useBreakpoint();
  return (
    <>
      <Container pad={{ vertical: 'xlarge' }} align="center">
        <ImgFluid width={isMobile ? '100px' : '150px'} src={logo} alt={alt} />
        <Paragraph
          textAlign="start"
          size={isDesktopOrTablet ? 'xlarge' : '2.25rem'}
          margin={{ top: 'large', bottom: 'none' }}
          fontWeight="500"
          color={color}
        >
          {textInfoFirst}
        </Paragraph>
        <ListItem
          color={color}
          itemKey={Math.random() * 1000}
          data={textInfoSecond}
        >
          {item => (
            <Paragraph
              size={isDesktopOrTablet ? 'xlarge' : 'xxlarge'}
              fontWeight="400"
              margin={{ vertical: 'none' }}
              align="center"
            >
              <StyledList dotsList="disc"> {item}</StyledList>
            </Paragraph>
          )}
        </ListItem>
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
      textInfoSecond: PropTypes.string,
    }),
  }).isRequired,
};
