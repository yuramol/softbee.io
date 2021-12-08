import React, { useState } from 'react';
import { Box, Layer, ResponsiveContext } from 'grommet';
import styled from 'styled-components';
import { Wizard } from './Wizard';
import useBus from '../utils/useBus';
import { maxBreakpoints } from '../utils/useBreakpoints';

const LayerBoxTalk = styled(Layer)`
  width: 100%;
  max-width: 1200px;
`;

export const LetsTalk = () => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('mobile', size);
  const [show, setShow] = useState(false);

  useBus('letsTalk/open', () => setShow(true));

  const hide = () => setShow(false);

  return (
    <Box>
      {show && (
        <LayerBoxTalk onEsc={hide} onClickOutside={hide} background={false}>
          <Box
            align="center"
            justify="center"
            height="100%"
            margin={isMobile ? undefined : { horizontal: '15px' }}
          >
            <Wizard onClose={hide} inModal needBoxShadow={false} />
          </Box>
        </LayerBoxTalk>
      )}
    </Box>
  );
};
