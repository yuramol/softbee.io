import React from 'react';
import styled from 'styled-components';
import { Box, Layer, Image, Nav } from 'grommet';

import { Button } from '../../legos/Button/Button';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { RouterLink } from '../../legos/RouterLink';
import { theme } from '../../utils/theme';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

const StyledLayer = styled(Layer)`
  top: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  background-color: ${theme.global.colors.brand};
  border-radius: 0;
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
    <Box>
      <Button
        focusIndicator={false}
        onClick={onOpen}
        icon={<Image src="/assets/icons/menuIcon.svg" />}
      />
      {open && (
        <StyledLayer
          responsive={false}
          position="left"
          full="vertical"
          onClickOutside={onClose}
          animate
        >
          <Box pad={{ horizontal: 'large', top: 'large' }} background="brand">
            <Nav direction="column" justify="center">
              {linkItems.map(linkItem => (
                <RouterLink
                  color="#fff"
                  disableUnderline
                  fontSize="20px"
                  padding="1rem 0"
                  isMobileNavigation
                  activeColor={theme.global.colors['accent-1']}
                  to={linkItem.link}
                  key={linkItem.id}
                  onClick={onClose}
                >
                  {linkItem.label}
                </RouterLink>
              ))}
              <Box height="60px" width="200px">
                <ButtonLetsTalk
                  outline
                  colorText="#fff"
                  label="Let’s talk 👋"
                  onClickButton={onClose}
                />
              </Box>
            </Nav>
          </Box>
        </StyledLayer>
      )}
    </Box>
  );
};

export default HeaderMenu;
