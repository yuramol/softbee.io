import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import {
  Box,
  Footer,
  Grid,
  Image,
  FormField,
  ResponsiveContext,
} from 'grommet';

import { Button } from '../legos/Button/Button';
import { Text } from '../legos/typography/Text';
import Logo from '../../static/assets/logo.svg';
import { Heading } from '../legos/typography/Heading';
import { TextInput } from '../legos/TextInput/TextInput';
import SendButtonIcon from '../../static/assets/sendButton.svg';
import { RouterLink } from '../legos/RouterLink';
import { maxBreakpoints } from '../utils/useBreakpoints';
import { sendSlack } from '../utils/useSlack';

const linkFooterItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Contacts', link: '/contacts' },
  { id: '4', label: 'Blog', link: '/blog' },
];

const StyledButton = styled(Button)`
  border-radius: unset;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

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
            justify="stretch"
            direction={isMobile ? 'row' : 'column'}
            align={alignVariant}
            pad={isMobile ? { vertical: 'none' } : { vertical: 'small' }}
            style={{ justifyContent: 'space-between' }}
          >
            {linkFooterItems.map(linkItem => (
              <RouterLink to={linkItem.link} key={linkItem.id}>
                <Button
                  size="large"
                  key={linkItem.id}
                  plain
                  label={linkItem.label}
                  style={{
                    textAlign: { alignVariant },
                    fontSize: '18px',
                    lineHeight: '40px',
                    fontWeight: '500',
                  }}
                />
              </RouterLink>
            ))}
          </Box>
        </Box>
        <Box
          justify="center"
          align="start"
          pad={
            isMobile ? { vertical: 'large', left: 'none' } : { left: 'xlarge' }
          }
        >
          <Heading
            alignSelf="start"
            level={isMobile ? 3 : 2}
            margin={
              isMobile ? { bottom: 'large' } : { top: 'small', bottom: 'none' }
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
                    <TextInput
                      onChange={handleTextChange}
                      value={textSlack}
                      placeholder={placeholder}
                      size="medium"
                      style={{
                        lineHeight: '26px',
                      }}
                    />
                  </Box>
                </FormField>
              )}
            </Box>
            <Box justify="start" align="start">
              <StyledButton onClick={send} plain margin={{ left: 'medium' }}>
                <Image fill src={SendButtonIcon} alt="Send Button" />
              </StyledButton>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Footer>
  );
};
