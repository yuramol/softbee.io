import React from 'react';
import { Link } from 'gatsby';
import { Box, Footer, Grid, Image, FormField } from 'grommet';
import { Button } from '../legos/Button/Button';
import { Heading } from '../legos/typography/Heading';
import { Text } from '../legos/typography/Text';
import { TextInput } from '../legos/TextInput/TextInput';
import Logo from '../../static/assets/logo.svg';

import SendButtonIcon from '../../static/assets/sendButton.svg';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Contacts', link: '/contacts' },
];

export const SiteFooter = () => (
  <Footer background="brand" height="350px" justify="stretch">
    <Grid columns={{ count: 2, size: 'auto' }} fill="horizontal">
      <Box
        justify="center"
        align="stretch"
        width="40vw"
        margin={{ left: 'xlarge' }}
        pad={{ left: 'xlarge' }}
      >
        <Link to="/">
          <Image
            src={Logo}
            alt="Soft Bee"
            alignSelf="start"
            margin={{ bottom: 'medium' }}
          />
        </Link>
        {linkItems.map(linkItem => (
          <Text
            key={linkItem.id}
            size="large"
            margin={{ top: 'small', left: '10px' }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#FFFFFF`,
              }}
              to={linkItem.link}
            >
              {`${linkItem.label}`}
            </Link>
          </Text>
        ))}
      </Box>
      <Box justify="center" align="stretch">
        <Heading level={2}>Message us anything</Heading>
        <Text alignSelf="start" size="large">
          Your message will be posted in one of our <br /> Slack channels.
        </Text>
        <Box direction="row" width="50%" margin={{ top: '40px' }}>
          <Grid columns={{ count: 2, size: 'auto' }} fill="horizontal">
            <Box justify="end" width="25vw">
              <FormField>
                <TextInput placeholder="Let’s create somethign dope!!! Xoxo" />
              </FormField>
            </Box>
            <Box justify="end" align="start" height="31px" width="55px">
              <Button margin={{ left: 'small' }}>
                <Image src={SendButtonIcon} alt="Send Button" />
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  </Footer>
);
