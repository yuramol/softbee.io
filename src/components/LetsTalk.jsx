import React, { useEffect, useState } from 'react';
import { Box, Layer } from 'grommet';
import { Wizard } from './Wizard';
import Event from '../utils/Event';

export const modalOpenEvent = new Event();

export const LetsTalk = () => {
  const [show, setShow] = useState(false);

  const hide = () => setShow(false);

  useEffect(() => {
    const openHandler = () => setShow(true);
    modalOpenEvent.on(openHandler);
    return () => modalOpenEvent.off(openHandler);
  }, []);

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
