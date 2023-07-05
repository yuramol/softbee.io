import { Box } from 'grommet';
import React from 'react';
import { ClutchFrames } from './ClutchFrames';

const ClutchReviews = () => {
  return (
    <Box
      width="100%"
      align="center"
      style={{
        backgroundColor: '#fafafa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box width="1200px" margin={{ top: '25px' }}>
        <div
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="12"
          data-height="375"
          data-nofollow="true"
          data-expandifr="true"
          data-scale="100"
          data-reviews="2107499,2106802,2091089"
          data-clutchcompany-id="2066968"
        />
      </Box>
      <ClutchFrames />
    </Box>
  );
};
export default ClutchReviews;
