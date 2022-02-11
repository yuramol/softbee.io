import React from 'react';

import { Box } from 'grommet';
import PropTypes from 'prop-types';
import Container from '../../Layout/Container';
import { ImgWebCase } from './styled';

export function WebCaseImage({ firstImage, firstImageRetina }) {
  return (
    <Container pad={{ vertical: 'xlarge' }}>
      <Box width={{ max: '1000px' }} margin={{ horizontal: 'auto' }}>
        <ImgWebCase src={firstImage} srcSet={firstImageRetina} />
      </Box>
    </Container>
  );
}
WebCaseImage.propTypes = {
  firstImage: PropTypes.string.isRequired,
  firstImageRetina: PropTypes.string.isRequired,
};
