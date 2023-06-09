import { Box, Grid, Image, Footer, Form, FormField } from 'grommet';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReCAPTCHA from 'react-google-recaptcha';

import styled from 'styled-components';
import {
  IconArrow,
  IconBehance,
  IconClutch,
  IconLinkedin,
  IconUpWork,
} from '../../legos/Icons';
import Container from '../Layout/Container';
import Logo from '../../../static/assets/logo.svg';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';
import { StyledLink, StyledButton, SocialLink, StyledText } from './styled';
import { Text } from '../../legos/typography/Text';
import { TextInput } from '../../legos/TextInput/TextInput';
import { dispatch } from '../../utils/useBus';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { sendSlack } from '../../utils/useSlack';
import { sendForm } from '../../utils/useForm';
import { theme } from '../../utils/theme';

const openModalLetsTalk = () => {
  dispatch('letsTalk/open');
};
// Our team' wait to redesign

const linkFooterItems = [
  { id: '1', label: 'Home', link: '/' },
  { id: '2', label: 'Portfolio', routerLink: true, link: '/work' },
  // { id: '3', label: 'Our team', routerLink: true, link: '/our-team' },
  { id: '4', label: 'Contacts', routerLink: false, click: openModalLetsTalk },
];
const footerLinkSocial = [
  {
    name: 'Upwork',
    iconSrc: <IconUpWork />,
    to: 'https://www.upwork.com/ag/softbee/',
  },
  {
    name: 'LinkedIn',
    iconSrc: <IconLinkedin />,
    to: 'https://www.linkedin.com/company/softbeeio/',
  },
  {
    name: 'Clutch',
    iconSrc: <IconClutch />,
    to: 'https://clutch.co/profile/softbee-0',
  },
  {
    name: 'Behance',
    iconSrc: <IconBehance />,
    to: 'https://www.behance.net/softbee',
  },
];
const StyledLinks = styled.a`
  color: ${props => props.color || 'white'};
  text-decoration: none;
  width: 50px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #f5d040;
    text-decoration: underline;
    width: 50px;
  }
`;
export const SiteFooter = () => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();

  const columnsSize = isSmall ? ['2.5rem', '2.5rem'] : ['3.125rem', '3.125rem'];

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
  const { title, placeholder, success } = edges[0].node.frontmatter.footer;

  const alignVariant = isSmall ? 'center' : 'start';
  const columnsCount = isSmall ? 'full' : ['1/2', 'auto'];
  const gapVariant = isDesktopOrTablet ? 'medium' : 'xlarge';

  const reCaptchaRef = React.useRef();

  const [formValues, setFormValues] = useState({});
  const [reCaptchaIsChecked, setReCaptchaCheck] = useState(false);
  const [successSendSlack, setSuccessSendSlack] = useState(false);

  const isMessageNotEmpty =
    !!formValues.textSlack && formValues.textSlack.length > 20;

  const onChangeForm = value => {
    setFormValues(value);
  };

  const onSubmitForm = async ({ value }) => {
    const reCaptchaToken = reCaptchaRef.current.getValue();

    const { redirected, ok } = await sendForm('slack-form', {
      'g-recaptcha-response': reCaptchaToken,
      ...value,
    });

    if (!redirected && ok) {
      sendSlack(value.textSlack);
      setFormValues({});
      setReCaptchaCheck(false);
      setSuccessSendSlack(true);
      setTimeout(() => {
        setSuccessSendSlack(false);
      }, 5000);
    }
  };

  const onChangeReCaptcha = value => {
    setReCaptchaCheck(value !== null);
  };

  return (
    <Footer background="brand">
      <Container>
        <Grid
          columns={columnsCount}
          gap={gapVariant}
          pad={{ vertical: isSmall ? 'xlarge' : 'large' }}
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
                justify={isSmall ? 'center' : undefined}
                direction="row"
                gap={isSmall ? '1.2rem' : '1.875rem'}
                align={alignVariant}
                margin={{
                  left: !isDesktopOrTablet ? 'xlarge' : undefined,
                  top: isDesktopOrTablet ? 'medium' : undefined,
                }}
              >
                {linkFooterItems.map(linkItem =>
                  linkItem.routerLink ? (
                    <RouterLink
                      color="#fff"
                      fontSize={isSmall ? '1rem' : '1.125rem'}
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
                      size={isSmall ? 'medium' : 'large'}
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
            <StyledLinks href="mailto:info@softbee.io">
              info@softbee.io
            </StyledLinks>
            <Grid
              margin={{
                top: isSmall ? 'large' : undefined,
              }}
              width="100%"
              justifyContent={isSmall ? 'center' : undefined}
              gap={isDesktopOrTablet ? '1rem' : 'large'}
              columns={{ count: 'fit', size: columnsSize }}
            >
              {footerLinkSocial.map(item => (
                <SocialLink
                  key={item.name}
                  color="#fff"
                  activeColor={theme.global.colors['accent-1']}
                  icon={item.iconSrc}
                  to={item.to}
                  target="_blank"
                />
              ))}
            </Grid>
          </Box>

          <Box
            height={{ min: isSmall ? '165px' : '207px' }}
            justifyContent="start"
            align={isSmall ? 'center' : undefined}
          >
            <Heading
              level={2}
              textAlign={alignVariant}
              color="#fff"
              margin={{ top: 'none', bottom: 'medium' }}
            >
              {title}
            </Heading>
            <Form
              name="slack-form"
              value={formValues}
              onChange={onChangeForm}
              onSubmit={onSubmitForm}
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <Grid
                justifyContent={isSmall ? 'center' : undefined}
                columns={{ count: 2, size: ['auto', 'auto'] }}
                fill="horizontal"
              >
                <Box>
                  {successSendSlack ? (
                    <Text alignSelf="start">{success}</Text>
                  ) : (
                    <>
                      <FormField>
                        <TextInput
                          name="textSlack"
                          placeholder={placeholder}
                          size={isSmall ? 'medium' : 'xlarge'}
                        />
                      </FormField>
                      {!isMessageNotEmpty && (
                        <Text size="small" margin={{ bottom: 'small' }}>
                          You must enter at least 20 characters
                        </Text>
                      )}
                      {isMessageNotEmpty && (
                        <ReCAPTCHA
                          ref={reCaptchaRef}
                          onChange={onChangeReCaptcha}
                          sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                        />
                      )}
                    </>
                  )}
                </Box>

                <StyledButton
                  type="submit"
                  disabled={!isMessageNotEmpty || !reCaptchaIsChecked}
                  plain={false}
                  outline
                  icon={<IconArrow />}
                  margin={{ left: 'medium' }}
                />
              </Grid>
            </Form>
          </Box>
        </Grid>
      </Container>
    </Footer>
  );
};
