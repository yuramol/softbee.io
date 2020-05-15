import React from "react"
import { Link } from "gatsby"
import { Grommet as GrommetIcon } from "grommet-icons"
import {
  Box,
  grommet,
  Grommet,
  Text,
  Footer,
  Grid,
  Button,
  Image,
  Form,
  FormField,
  TextInput,
} from "grommet"
import styled from "styled-components"

import Logo from "..//..//static/assets/logo.svg"
import sendButton from "..//..//static/assets/sendButton.svg"

const linksItem = [{}]

const SiteFooter = () => {
  return (
    <Footer background="#104065" height="350px" justify="center" pad="small">
      <Grid
        columns={{ count: 2, size: "auto" }}
        fill="horizontal"
        gap="small"
        pad="large"
      >
        <Box justify="center" align="stretch" pad="large">
          <Image src={Logo} alt="Soft Bee" alignSelf="start" />
          <Text margin={{ top: "medium" }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#FFFFFF`,                
              }}
              to="/work"
            >
              Work
            </Link>
          </Text>
          <Text size="18px" margin={{ top: "medium" }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#FFFFFF`,                
              }}
              to="/team"
            >
              Our team
            </Link>
          </Text>
          <Text size="18px" margin={{ top: "medium" }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#FFFFFF`,
                // fontFamily: "Gilroy-Medium",
                // hover: {textDecoration: 'underline'}????
              }}
              to="/contacts"              
            >
              Contacts
            </Link>
          </Text>
        </Box>
        <Box justify="center" align="stretch">
          <Text size="48px" margin={{ top: "medium" }} alignSelf="start">
            Message us anything
          </Text>
          <Text size="18px" margin={{ top: "small" }} alignSelf="start">
            Your message will be posted in one of our <br /> Slack channels.
          </Text>
          <Form>
            <Box direction="row" margin={{ top: "lagre" }}>
              <Grid columns={{ count: 2, size: "auto" }} fill="horizontal">
                <Box justify="center" width="385px">
                  <FormField name="name" htmlfor="text-input-id">
                    <TextInput
                      id="text-input-id"
                      name="name"
                      placeholder={
                        <Text size="18px" opacity="0.5" margin={{ top: "small" }}>
                          Let’s create somethign dope!!! Xoxo
                        </Text>
                      }
                    />
                  </FormField>
                </Box>
                <Box align="start">
                  <Button
                    onClick={() => {}}
                    margin={{ top: "medium", left: "small" }}
                  >
                    <Image src={sendButton} alt="Send Button" />
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Form>
        </Box>
      </Grid>
    </Footer>
  )
}

export default SiteFooter
