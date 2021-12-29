import {
  Box,
  Grid,
  Image,
  Footer,
  FormField,
  ResponsiveContext,
} from 'grommet';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  IconArrow,
  IconFacebook,
  IconInsta,
  IconLinkedin,
  IconTelegram,
  IconTwitter,
} from '../../legos/Icons';
import Container from '../Layout/Container';
import Logo from '../../../static/assets/logo.svg';
import { Heading } from '../../legos/typography/Heading';
import { Paragraph } from '../../legos/typography/Paragraph';
import { RouterLink } from '../../legos/RouterLink';
import { StyledLink, StyledButton, SocialLink, StyledText } from './styled';
import { Text } from '../../legos/typography/Text';
import { TextInput } from '../../legos/TextInput/TextInput';
import { dispatch } from '../../utils/useBus';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import { sendSlack } from '../../utils/useSlack';
import { theme } from '../../utils/theme';

const openModalLetsTalk = () => {
  dispatch('letsTalk/open');
};

const linkFooterItems = [
  { id: '1', label: 'Work', routerLink: true, link: '/work' },
  { id: '2', label: 'Our team', routerLink: true, link: '/our-team' },
  { id: '3', label: 'Contacts', routerLink: false, click: openModalLetsTalk },
  { id: '4', label: 'Blog', routerLink: true, link: '/blog' },
];

export const SiteFooter = () => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isDesktopOrTablet = maxBreakpoints('desktopOrTablet', size);

  const columnsSize = isMobile
    ? ['2.5rem', '2.5rem']
    : ['3.125rem', '3.125rem'];

  const {
    footerData: { edges },
  } = useStaticQuery(
    graphql`
      query {
        footerData: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "common" } } }
        ) {
          edges {
            node {
              frontmatter {
                footer {
                  message
                  placeholder
                  title
                  success
                }
              }
            }
          }
        }
      }
    `,
  );
  const {
    title,
    message,
    placeholder,
    success,
  } = edges[0].node.frontmatter.footer;

  const alignVariant = isMobile ? 'center' : 'start';
  const columnsCount = isMobile ? 'full' : ['1/2', 'auto'];
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';

  const [textSlack, setTextSlack] = useState('');
  const [successSendSlack, setSuccessSendSlack] = useState(false);

  const handleTextChange = e => {
    setTextSlack(e.target.value);
  };
  const send = () => {
    if (textSlack.length > 3) {
      sendSlack(textSlack);
      setSuccessSendSlack(true);
      setTextSlack('');
      setTimeout(() => setSuccessSendSlack(false), 3000);
    }
  };

  return (
    <Footer background="brand">
      <Container>
        <Grid
          columns={columnsCount}
          gap={gapVariant}
          pad={{ vertical: 'large' }}
        >
          <Box justify="between">
            <Box
              direction={isDesktopOrTablet ? 'column' : 'row'}
              align={alignVariant}
            >
              <StyledLink to="/">
                <Image src={Logo} alt="Soft Bee" />
              </StyledLink>
              <Box
                width="100%"
                justify={isMobile && 'center'}
                direction="row"
                gap={isMobile ? '1.2rem' : '1.875rem'}
                align={alignVariant}
                margin={{
                  left: !isDesktopOrTablet && 'xlarge',
                  top: isDesktopOrTablet && 'medium',
                }}
              >
                {linkFooterItems.map(linkItem =>
                  linkItem.routerLink ? (
                    <RouterLink
                      color="#fff"
                      fontSize={isMobile ? '1rem' : '1.125rem'}
                      padding="0 0 0.5rem 0"
                      disableUnderline
                      activeColor={theme.global.colors['accent-1']}
                      to={linkItem.link}
                      key={linkItem.id}
                    >
                      {linkItem.label}
                    </RouterLink>
                  ) : (
                    <StyledText
                      size={isMobile ? 'medium' : 'large'}
                      color="#fff"
                      padding="0 0 0.5rem 0"
                      key={linkItem.id}
                      onClick={linkItem.click}
                    >
                      {linkItem.label}
                    </StyledText>
                  ),
                )}
              </Box>
            </Box>
            <Grid
              margin={{
                top: isMobile && 'large',
              }}
              width="100%"
              justifyContent={isMobile && 'center'}
              gap={isDesktopOrTablet ? '1rem' : 'large'}
              columns={{ count: 'fit', size: columnsSize }}
            >
              <SocialLink
                color="#fff"
                activeColor={theme.global.colors['accent-1']}
                icon={<IconInsta />}
                to="/a"
              />
              <SocialLink
                color="#fff"
                activeColor={theme.global.colors['accent-1']}
                icon={<IconLinkedin />}
                to="/d"
              />
              <SocialLink
                color="#fff"
                activeColor={theme.global.colors['accent-1']}
                icon={<IconTelegram />}
                to="/s"
              />
              <SocialLink
                color="#fff"
                activeColor={theme.global.colors['accent-1']}
                icon={<IconFacebook />}
                to="/d"
              />
              <SocialLink
                color="#fff"
                activeColor={theme.global.colors['accent-1']}
                icon={<IconTwitter />}
                to="/w"
              />
            </Grid>
          </Box>

          <Box justify="center" align={isMobile && 'center'}>
            <Heading
              level={2}
              textAlign={alignVariant}
              color="#fff"
              margin={{ top: 'none', bottom: 'medium' }}
            >
              {title}
            </Heading>
            <Paragraph
              size="xlarge"
              color="#fff"
              textAlign={alignVariant}
              margin={{ top: 'none', bottom: 'medium' }}
            >
              {message}
            </Paragraph>
            <Grid
              justifyContent={isMobile && 'center'}
              columns={{ count: 2, size: ['auto', 'auto'] }}
              fill="horizontal"
            >
              <Box>
                {successSendSlack ? (
                  <Text alignSelf="start">{success}</Text>
                ) : (
                  <FormField margin="none">
                    <TextInput
                      onChange={handleTextChange}
                      value={textSlack}
                      placeholder={placeholder}
                      size="xlarge"
                    />
                  </FormField>
                )}
              </Box>

              <StyledButton
                plain={false}
                disabled
                outline
                icon={<IconArrow />}
                onClick={send}
                margin={{ left: 'medium' }}
              />
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Footer>
  );
};
