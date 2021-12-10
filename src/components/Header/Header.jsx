import React from 'react';
import { Link } from 'gatsby';
import { Box, Grid, Image, Nav, ResponsiveContext } from 'grommet';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import useStickyElement from '../../utils/useStickyElement';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { StyledLink, StyledHeader, StyledHeaderWrapper } from './styledHeader';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Blog', link: '/blog' },
];

export const SiteHeader = () => {
  const { elRef, isSticky } = useStickyElement();
  const size = React.useContext(ResponsiveContext);
  const isDense = maxBreakpoints('sTablet', size);
  const isMobile = maxBreakpoints('small', size);

  return (
    <div ref={elRef}>
      <StyledHeader isMobile={isMobile} isSticky={!isMobile ? isSticky : false}>
        {isMobile ? (
          <Grid
            pad="small"
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
          >
            <HeaderMenu />
            <Box align="center" justify="center" pad={{ right: '54px' }}>
              <StyledLink to="/">
                <Image src="/assets/logo.svg" alt="Soft Bee" />
              </StyledLink>
            </Box>
          </Grid>
        ) : (
          <StyledHeaderWrapper
            pad={{
              horizontal: 'large',
              vertical: isSticky ? '10px' : 'medium',
            }}
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
          >
            <Box align="start" justify="center" pad={{ right: '150px' }}>
              <Link to="/">
                <Image
                  src="/assets/logo.svg"
                  alt="Soft Bee"
                  alignSelf="start"
                />
              </Link>
            </Box>
            <Nav direction="row" align="center" justify="end">
              {linkItems.map(linkItem => (
                <RouterLink
                  padding="10px"
                  color={isSticky ? '#fff' : undefined}
                  disableUnderline
                  to={linkItem.link}
                  key={linkItem.id}
                >
                  {linkItem.label}
                </RouterLink>
              ))}
              <Box
                height={isSticky ? '50px' : '60px'}
                width={isDense ? '148px' : '200px'}
              >
                <ButtonLetsTalk primary={isSticky} label="Let’s talk 👋" />
              </Box>
            </Nav>
          </StyledHeaderWrapper>
        )}
      </StyledHeader>
    </div>
  );
};
