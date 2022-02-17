import React from 'react';
import PropTypes from 'prop-types';
import { StyledVideoFrame } from '../../legos/VideoFrame/VideoFrame';
import { VideoBox } from '../../legos/VideoFrame/VideoBox';
// import { useBreakpoint } from '../../utils/useBreakpoint';
const url = 'https://www.youtube.com/embed/zpOULjyy-n8';
export const WorkCaseVideo = () => {
  return (
    <>
      <VideoBox>
        <StyledVideoFrame src={url} />
      </VideoBox>
    </>
  );
};

WorkCaseVideo.propTypes = {
  data: PropTypes.shape({
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};
