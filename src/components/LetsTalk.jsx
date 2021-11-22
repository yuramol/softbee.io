import React, { useState } from 'react';
import { Box, Layer } from 'grommet';
import styled from 'styled-components';
import { Wizard } from './Wizard';
import useBus from '../utils/useBus';

const StyledBoxTalk = styled(Box)`
  max-width: 1220px;
  height: 100%;
`;

export const LetsTalk = () => {
  const [show, setShow] = useState(false);

  useBus('letsTalk/open', () => setShow(true));

  const hide = () => setShow(false);

  return (
    <Box>
      {show && (
        <Layer onEsc={hide} onClickOutside={hide} background={false}>
          <StyledBoxTalk align="center" justify="center">
            <Wizard
              onClose={hide}
              needBoxShadow={false}
              style={{ height: '100%' }}
            />
          </StyledBoxTalk>
        </Layer>
      )}
    </Box>
  );
};
