import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Footer,
  Grid,
  Image,
  FormField,
  ResponsiveContext,
} from 'grommet';

import { Text } from '../legos/typography/Text';
import Logo from '../../static/assets/logo.svg';
import { Heading } from '../legos/typography/Heading';

import { RouterLink } from '../legos/RouterLink';
import { maxBreakpoints } from '../utils/useBreakpoints';
import { sendSlack } from '../utils/useSlack';
import { dispatch } from '../utils/useBus';

import {
  StyledButton,
  StyledLink,
  StyledFooterInput,
  StyledText,
} from './styledFooter';
import Container from './Layout/Container';

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
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          fill="horizontal"
          pad={isMobile ? 'large' : { vertical: 'large', horizontal: 'xlarge' }}
        >
          <Box
            align={alignVariant}
            pad={
              isMobile
                ? { top: 'medium', right: 'none' }
                : { left: 'large', right: 'xlarge' }
            }
          >
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
          <Box
            justify="center"
            align="start"
            pad={
              isMobile
                ? { vertical: 'large', left: 'none' }
                : { left: 'xlarge' }
            }
          >
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
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.6665 8H21.6665"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22.3736 8.70711C22.7641 8.31658 22.7641 7.68342 22.3736 7.29289L16.0096 0.928932C15.6191 0.538408 14.986 0.538408 14.5954 0.928932C14.2049 1.31946 14.2049 1.95262 14.5954 2.34315L20.2523 8L14.5954 13.6569C14.2049 14.0474 14.2049 14.6805 14.5954 15.0711C14.986 15.4616 15.6191 15.4616 16.0096 15.0711L22.3736 8.70711ZM1.6665 9H21.6665V7H1.6665V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </StyledButton>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Footer>
  );
};
