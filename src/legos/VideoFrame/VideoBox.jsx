import React from 'react';
import PropTypes from 'prop-types';
import { VideoWrapper, VideoFrame } from './styled';

export const VideoBox = ({ data: { srcVideo } }) => {
  return (
    <VideoWrapper>
      <VideoFrame src={srcVideo} />
    </VideoWrapper>
  );
};

VideoBox.propTypes = {
  data: PropTypes.shape({
    srcVideo: PropTypes.string.isRequired,
  }).isRequired,
};
