import React from 'react';
import styled from 'styled-components';
import { Box, Layer, Image, Button, Nav } from 'grommet';
import { RouterLink } from '../../legos/RouterLink';

import { theme } from '../../utils/theme';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

const StyledLayer = styled(Layer)`
  bottom: 0;
  top: 0;
  max-height: 100vh;
  background-color: ${theme.global.colors.brand};
  border-radius: unset;
`;

const HeaderMenu = () => {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Box align="center">
      <Button
        focusIndicator={false}
        onClick={onOpen}
        icon={<Image src="/assets/icons/menuIcon.svg" />}
      />
      {open && (
        <StyledLayer
          responsive={false}
          margin={{ top: 'large' }}
          position="left"
          full="vertical"
          onClickOutside={onClose}
          animate
        >
          <Box
            pad={{ left: 'large', top: 'large', right: 'large' }}
            background="brand"
          >
            <Nav direction="column" justify="center">
              {linkItems.map(linkItem => (
                <RouterLink to={linkItem.link} key={linkItem.id}>
                  <Button
                    plain
                    size="large"
                    key={linkItem.id}
                    margin={{ vertical: 'xsmall' }}
                    label={linkItem.label}
                    onClick={onClose}
                    style={{
                      textAlign: 'center',
                      fontSize: '18px',
                      lineHeight: '40px',
                    }}
                  />
                </RouterLink>
              ))}
              <Box height="60px" width="200px">
                <ButtonLetsTalk label="Let’s talk 👋" onClickButton={onClose} />
              </Box>
            </Nav>
          </Box>
        </StyledLayer>
      )}
    </Box>
  );
};

export default HeaderMenu;
