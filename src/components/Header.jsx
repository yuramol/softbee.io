import React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Header,
  Button,
  Grid,
  Image,
  Nav,
  Menu,
  ResponsiveContext,
} from 'grommet';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

export const SiteHeader = () => (
  <Header>
    <ResponsiveContext.Consumer>
      {responsive => {
        return responsive === 'small' ? (
          <Box pad="small" width="100%" background={{ color: 'brand' }}>
            <Grid fill rows={['auto', 'flex']} columns={['auto', 'flex']}>
              <Menu
                align="center"
                icon={<Image src="/assets/icons/menuIcon.svg" />}
                items={linkItems}
              />
              <Box align="center" justify="center">
                <Link to="/">
                  <Image src="/assets/logo.svg" alt="Soft Bee" href="/" />
                </Link>
              </Box>
            </Grid>
          </Box>
        ) : (
          <Grid
            pad={{
              left: 'large',
              right: 'large',
              top: 'medium',
              bottom: 'medium',
            }}
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
          >
            <Box align="start" justify="center">
              <Link to="/">
                <Image
                  src="/assets/logo.svg"
                  alt="Soft Bee"
                  alignSelf="start"
                  href="/"
                />
              </Link>
            </Box>
            <Nav direction="row" align="center" justify="end">
              {linkItems.map(linkItem => (
                <Button
                  key={linkItem.id}
                  plain
                  label={linkItem.label}
                  href={linkItem.link}
                  margin={{ left: 'medium', right: 'medium' }}
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    fontSize: '18px',
                  }}
                />
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
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  </Header>
);
