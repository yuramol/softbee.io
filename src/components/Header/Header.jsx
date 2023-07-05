import React from 'react';
import { Link } from 'gatsby';
import { Box, Grid, Image, Nav } from 'grommet';

import HeaderMenu from '../HeaderMenu/HeaderMenu';
import useStickyElement from '../../utils/useStickyElement';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { RouterLink } from '../../legos/RouterLink';
import { StyledLink, StyledHeader, StyledHeaderWrapper } from './styled';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { theme } from '../../utils/theme';

// Our team' wait to redesign
const linkItems = [
  { id: '1', label: 'Home', link: '/' },
  { id: '2', label: 'Portfolio', link: '/profile' },
  { id: '3', label: 'Blog', link: '/blog' },
];

export const SiteHeader = () => {
  const { elRef, isSticky } = useStickyElement();
  const { isSmall, isSTablet } = useBreakpoint();

  return (
    <div ref={elRef}>
      <StyledHeader isMobile={isSmall} isSticky={!isSmall ? isSticky : false}>
        {isSmall ? (
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
              horizontal: isSTablet ? 'medium' : 'large',
              vertical: isSticky ? 'small' : 'medium',
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
                />
              </Link>
            </Box>
            <Nav direction="row" align="center" justify="end">
              {linkItems.map(linkItem => (
                <RouterLink
                  padding="10px"
                  fontWeight="500"
                  fontSize="20px"
                  activeColor={
                    isSticky
                      ? theme.global.colors['accent-1']
                      : theme.global.colors.brand
                  }
                  isSticky={isSticky}
                  color={isSticky ? '#fff' : '#606060'}
                  disableUnderline
                  to={linkItem.link}
                  key={linkItem.id}
                >
                  {linkItem.label}
                </RouterLink>
              ))}
              <Box
                height={{ min: '50px' }}
                width={{ min: isSTablet ? '148px' : '200px' }}
              >
                <ButtonLetsTalk
                  outline
                  colorText={isSticky ? '#fff' : '#54575A'}
                  label="Let’s talk 👋"
                />
              </Box>
            </Nav>
          </StyledHeaderWrapper>
        )}
      </StyledHeader>
    </div>
  );
};
