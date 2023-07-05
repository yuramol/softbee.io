import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Layout/Container';
import { VideoFrame, VideoWrapper } from './styled';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const VideoBox = ({ src }) => {
  const { isSmall } = useBreakpoint();
  return (
    <Container>
      <VideoWrapper isSmall={isSmall}>
        <VideoFrame src={src} />
      </VideoWrapper>
    </Container>
  );
};

VideoBox.propTypes = {
  src: PropTypes.string.isRequired,
};
