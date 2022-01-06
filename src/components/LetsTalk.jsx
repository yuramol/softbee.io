import styled from 'styled-components';
import React, { useState } from 'react';
import { Box, Layer, ResponsiveContext } from 'grommet';

import useBus from '../utils/useBus';
import { Wizard } from './Wizard/Wizard';
import { maxBreakpoints } from '../utils/useBreakpoints';

export const LetsTalk = () => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const [show, setShow] = useState(false);

  useBus('letsTalk/open', () => setShow(true));

  const hide = () => setShow(false);

  const LayerBoxTalk = styled(Layer)`
    width: 100%;
  `;

  return (
    <Box>
      {show && (
        <LayerBoxTalk onEsc={hide} onClickOutside={hide} background={false}>
          <Box
            align="center"
            justify="center"
            height="100%"
            margin={{ horizontal: !isMobile ? '1rem' : undefined }}
          >
            <Wizard maxWidth="1000px" onClose={hide} needBoxShadow={false} />
          </Box>
        </LayerBoxTalk>
      )}
    </Box>
  );
};
