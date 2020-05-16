import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Text,
  Footer,
  Grid,
  Button,
  Image,
  Form,
  FormField,
  TextInput,
} from "grommet"

import Logo from "..//..//static/assets/logo.svg"
import sendButton from "..//..//static/assets/sendButton.svg"

const linkItems = ["Work", "Our team", "Contacts"]

const SiteFooter = () => {
  return (
    <Footer background="#104065" height="350px" justify="stretch">
      <Grid
        columns={{ count: 2, size: "auto" }}
        fill="horizontal"
        //gap="small"
        // pad="large"
      >
        <Box justify="center" align="stretch" pad="xlarge" width="40vw" margin={{ left: "xlarge" }}>
          <Image src={Logo} alt="Soft Bee" alignSelf="start" />
          {linkItems.map(props => (
            <Text margin={{ top: "medium" }}>
              <Link
                style={{ 
                  boxShadow: `none`,                
                  // textDecoration: `none`,
                  color: `#FFFFFF`,
                  fontFamily: "Gilroy-Medium",
                }}
                to="/"
              >
                {`${props}`}
              </Link>
            </Text>
          ))}
        </Box>
        <Box justify="center" align="stretch" pad="medium" width="55vw">
          <Text
            size="48px"
            margin={{ top: "medium" }}
            alignSelf="start"
            style={{
              fontFamily: "Gilroy-Medium",
            }}
          >
            Message us anything
          </Text>
          <Text
            size="18px"
            margin={{ top: "small" }}
            alignSelf="start"
            style={{
              fontFamily: "Gilroy-Medium",
            }}
          >
            Your message will be posted in one of our <br /> Slack channels.
          </Text>
          <Form>
            <Box direction="row" margin={{ top: "lagre" }} width="50%">
              <Grid columns={{ count: 2, size: "auto" }} fill="horizontal">
                <Box justify="center" width="25vw">
                  <FormField name="name" htmlfor="text-input-id">
                    <TextInput
                      id="text-input-id"
                      name="name"
                      placeholder={
                        <Text
                          size="18px"
                          margin={{ top: "small" }}
                          style={{
                            fontFamily: "Gilroy-Medium",
                            opacity: "0.5",
                          }}
                        >
                          Let’s create somethign dope!!! Xoxo
                        </Text>
                      }
                    />
                  </FormField>
                </Box>
                <Box align="start" height="33px" width="55px">
                  <Button
                    onClick={() => {}}
                    margin={{ top: "26px", left: "small" }}
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
