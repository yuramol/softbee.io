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
  StyledLink,
  StyledText,
  StyledButton,
  StyledFooterInput,
} from './styled';
import { ArrowIcon } from './ArrowIcon';
import Container from '../Layout/Container';
import { dispatch } from '../../utils/useBus';
import { sendSlack } from '../../utils/useSlack';
import { Text } from '../../legos/typography/Text';
import Logo from '../../../static/assets/logo.svg';
import { RouterLink } from '../../legos/RouterLink';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

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
  const isMobile = maxBreakpoints('xSmall', size);
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

  const columnsCount = isMobile ? 1 : 2;
  const alignVariant = isMobile ? 'center' : 'start';

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
    <Footer background="brand" justify="stretch">
      <Container>
        <Grid
          columns={{ count: columnsCount, size: ['auto', '1fr'] }}
          gap="medium"
          pad={{ vertical: 'large' }}
        >
          <Box align={alignVariant}>
            <StyledLink to="/">
              <Image
                src={Logo}
                alt="Soft Bee"
                margin={isMobile ? { bottom: 'small' } : { bottom: 'medium' }}
              />
            </StyledLink>
            <Box
              width="100%"
              justify={isMobile ? 'between' : 'stretch'}
              direction={isMobile ? 'row' : 'column'}
              align={alignVariant}
              pad={isMobile ? { vertical: 'none' } : { vertical: 'small' }}
            >
              {linkFooterItems.map(linkItem =>
                linkItem.routerLink ? (
                  <RouterLink to={linkItem.link} key={linkItem.id}>
                    <StyledText fontSize="18px" lineHeight="40px">
                      {linkItem.label}
                    </StyledText>
                  </RouterLink>
                ) : (
                  <StyledText
                    fontSize="18px"
                    lineHeight="40px"
                    key={linkItem.id}
                    onClick={linkItem.click}
                  >
                    {linkItem.label}
                  </StyledText>
                ),
              )}
            </Box>
          </Box>
          <Box justify="center" align="start">
            <Heading
              alignSelf="start"
              level={isMobile ? 3 : 2}
              margin={
                isMobile
                  ? { bottom: 'large' }
                  : { top: 'small', bottom: 'none' }
              }
              fontWeight="400"
            >
              {title}
            </Heading>
            <Text alignSelf="start" size="medium" weight="400">
              {message}
            </Text>
            <Grid
              columns={{ count: 2, size: ['auto', 'auto'] }}
              fill="horizontal"
              margin={isMobile ? { top: 'large' } : { top: 'medium' }}
            >
              <Box>
                {successSendSlack ? (
                  <Text alignSelf="start">{success}</Text>
                ) : (
                  <FormField>
                    <Box>
                      <StyledFooterInput
                        onChange={handleTextChange}
                        value={textSlack}
                        placeholder={placeholder}
                        size="medium"
                      />
                    </Box>
                  </FormField>
                )}
              </Box>
              <Box justify="start" align="start">
                <StyledButton onClick={send} plain margin={{ left: 'medium' }}>
                  <ArrowIcon />
                </StyledButton>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Footer>
  );
};
