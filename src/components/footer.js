import React from "react"
import { Link } from "gatsby"
import {
  Box,  
  Footer,
  Grid,
  Button,
  Image,
  Form,
  FormField,
  TextInput,
} from "grommet"
import { Text } from "..//legos/typography/Text";
import { Add } from "grommet-icons";
import Logo from "..//..//static/assets/logo.svg"

import SendButtonIcon from "..//..//static/assets/sendButton.svg"
import { StyledButton } from '../legos/Button/Button'

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
        <Box justify="center" align="stretch" width="40vw" margin={{ left: "xlarge" }} pad={{ left: "xlarge" }} >
            <Image src={Logo} alt="Soft Bee" alignSelf="start" margin={{bottom : "medium" }}/>    
          {linkItems.map(props => (
            <Text size="large" margin={{ top: "small" , left: "10px"}}>
              <Link
                style={{ 
                  boxShadow: `none`,                
                  textDecoration: `none`,
                  color: `#FFFFFF`,                  
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
            size="xxlarge"
            margin={{ top: "small" }}
            alignSelf="start"
            fontFamily="Gilroy-Regular"
            
          >
            Message us anything
          </Text>
          <Text
            size="large"
            margin={{ top: "small" }}
            alignSelf="start" 
            fontFamily="Gilroy-Regular"

          >
            Your message will be posted in one of our <br /> Slack channels.
          </Text>
          <Form>
            <Box direction="row" width="50%" margin={{ top: "40px" }}>
              <Grid columns={{ count: 2, size: "auto" }} fill="horizontal">
                <Box justify="center" width="25vw" >
                  <FormField name="name" htmlfor="text-input-id">
                    <TextInput
                      id="text-input-id"
                      name="name" 
                      placeholder={
                        <Text
                          size="medium"
                          fontFamily="Gilroy-Regular"
                          style={{                            
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
                    margin={{ top: "9px", left: "small" }}
                  >
                    <Image src={SendButtonIcon} alt="Send Button" />
                  </Button>
                  {/* <Button 
                  label="" 
                  fill color="yellow"
                  borderRadius= "2px" 
                  margin={{ top: "10px", left: "small" }} 
                  icon={<Add />}
                  />                     */}
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
