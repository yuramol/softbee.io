import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Layout/Container';
import { VideoFrame, VideoWrapper } from './styled';

export const VideoBox = ({ src }) => {
  return (
    <Container>
      <VideoWrapper>
        <VideoFrame src={src} />
      </VideoWrapper>
    </Container>
  );
};

VideoBox.propTypes = {
  src: PropTypes.string.isRequired,
};
