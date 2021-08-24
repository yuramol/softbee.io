import React, { useState } from 'react';
import { Box, Layer } from 'grommet';
import { Wizard } from './Wizard';
import useBus from '../utils/useBus';

export const LetsTalk = () => {
  const [show, setShow] = useState(false);

  useBus('letsTalk/open', () => setShow(true));

  const hide = () => setShow(false);

  return (
    <Box>
      {show && (
        <Layer onEsc={hide} onClickOutside={hide} background={false}>
          <Box
            align="center"
            justify="center"
            style={{ width: '1220px', height: '100%' }}
          >
            <Wizard
              onClose={hide}
              needBoxShadow={false}
              style={{ height: '100%' }}
            />
          </Box>
        </Layer>
      )}
    </Box>
  );
};
