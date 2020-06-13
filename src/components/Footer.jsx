import React from 'react';
import { Link } from 'gatsby';
import {
  Box,
  Footer,
  Grid,
  Button,
  Image,
  Form,
  FormField,
  TextInput,
} from 'grommet';
import { Text } from '../legos/typography/Text';
import Logo from '../../static/assets/logo.svg';

import SendButtonIcon from '../../static/assets/sendButton.svg';

const linkItems = [
  { id: '1', label: 'Work', link: '/work' },
  { id: '2', label: 'Our team', link: '/our-team' },
  { id: '3', label: 'Contacts', link: '/contacts' },
];

export const SiteFooter = () => (
  <Footer background="#104065" height="350px" justify="stretch">
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
        {linkItems.map(props => (
          <Text
            key={props.id}
            size="large"
            margin={{ top: 'small', left: '10px' }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#FFFFFF`,
              }}
              to={props.link}
            >
              {`${props.label}`}
            </Link>
          </Text>
        ))}
      </Box>
      <Box justify="center" align="stretch">
        <Text
          size="xxlarge"
          margin={{ top: 'small' }}
          alignSelf="start"
          fontFamily="Gilroy-Regular"
        >
          Message us anything
        </Text>
        <Text
          margin={{ top: 'small' }}
          alignSelf="start"
          fontFamily="Gilroy-Regular"
        >
          Your message will be posted in one of our <br /> Slack channels.
        </Text>
        <Form>
          <Box direction="row" width="50%" margin={{ top: '40px' }}>
            <Grid columns={{ count: 2, size: 'auto' }} fill="horizontal">
              <Box justify="center" width="25vw">
                <Form onSubmit={() => {}}>
                  <FormField name="name" htmlfor="textinput-id">
                    <TextInput
                      id="textinput-id"
                      name="name"
                      placeholder="Let’s create somethign dope!!! Xoxo"
                    />
                  </FormField>
                </Form>
              </Box>
              <Box align="start" height="33px" width="55px">
                <Button margin={{ top: '9px', left: 'small' }}>
                  <Image src={SendButtonIcon} alt="Send Button" />
                </Button>
              </Box>
            </Grid>
          </Box>
        </Form>
      </Box>
    </Grid>
  </Footer>
);
