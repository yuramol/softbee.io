import React from 'react';
import styled from 'styled-components';
import { Box, Layer, Image, Button, Nav } from 'grommet';

import { theme } from '../../utils/theme';

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
                <Box
                  key={linkItem.id}
                  align="center"
                  height="60px"
                  width="200px"
                >
                  <Button
                    margin={{ vertical: 'small' }}
                    plain
                    label={linkItem.label}
                    href={linkItem.link}
                    onClick={onClose}
                    style={{
                      boxShadow: `none`,
                      textDecoration: `none`,
                      fontSize: '18px',
                    }}
                  />
                </Box>
              ))}
              <Box height="60px" width="200px">
                <Button
                  label="Let’s talk 👋"
                  onClick={onClose}
                  fill
                  color="yellow"
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    fontSize: '18px',
                  }}
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
