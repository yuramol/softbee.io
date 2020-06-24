import React from 'react';
import { Link } from 'gatsby';
import { Box, Header, Button, Image } from 'grommet';
import Logo from '../../static/assets/logo.svg';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

export const SiteHeader = () => (
  <Header pad="medium">
    <Box
      width="100wh"
      justify="stretch"
      direction="row"
      gap="medium"
      margin="medium"
      align="center"
    >
      <Link to="/">
        <Image src={Logo} alt="Soft Bee" alignSelf="start" href="/" />
      </Link>
    </Box>
    <Box alignSelf="end" align="center" direction="row">
      {linkItems.map(linkItem => (
        <Button
          key={linkItem.id}
          plain
          label={linkItem.label}
          href={linkItem.link}
          margin="medium"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            fontSize: '18px',
          }}
        />
      ))}
      <Box justify="center" align="center" height="60px" width="200px">
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
    </Box>
  </Header>
);
