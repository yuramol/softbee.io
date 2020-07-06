import React from 'react';
import PropTypes from 'prop-types';

import { Box, DropButton, Layer, Image, Button, Nav } from 'grommet';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

const DropContent = ({ onClose }) => (
  <Layer
    responsive={false}
    margin={{ top: 'large' }}
    position="top-left"
    onClickOutside={onClose}
    onEsc={onClose}
    animation="fadeIn"
  >
    <Box
      pad={{ left: 'small', top: 'small', right: 'large', bottom: 'large' }}
      overflow="auto"
      background="brand"
    >
      <Nav direction="column" justify="center">
        {linkItems.map(linkItem => (
          <Box key={linkItem.id} align="center" height="60px" width="200px">
            <Button
              margin={{ vertical: 'small' }}
              plain
              label={linkItem.label}
              href={linkItem.link}
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
  </Layer>
);

DropContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const HeaderMenu = () => {
  const [open, setOpen] = React.useState();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Box align="center">
      <DropButton
        icon={<Image src="/assets/icons/menuIcon.svg" />}
        open={open}
        onOpen={onOpen}
        dropContent={<DropContent onClose={onClose} />}
        dropProps={{ align: { top: 'bottom' } }}
      />
    </Box>
  );
};

export default HeaderMenu;
