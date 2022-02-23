import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '../../../../legos/typography/Paragraph';
import { ImgFluid } from '../../../Layout/ImgFluid';
import { useBreakpoint } from '../../../../utils/useBreakpoint';
import Container from '../../../Layout/Container';

export const MobileCaseInfo = ({
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
        <Paragraph
          textAlign="center"
          size={isSmall ? 'medium' : 'xxlarge'}
          margin={{ top: 'large', bottom: 'none' }}
          fontWeight="300"
          color={color}
        >
          {textInfo}
        </Paragraph>
      </Container>
    </>
  );
};
MobileCaseInfo.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      textInfoFirst: PropTypes.string,
    }),
  }).isRequired,
};
