import React from "react"
import { Grommet, Box, Button, Grid, Text } from 'grommet';

import { theme } from "../../utils/theme";
import { Heading } from "../../legos/typography/Heading";


class HomeHeroSection extends React.Component {
  render() {

    return (
      <Grommet theme={theme}>
          <Grid
             columns={{count: 2,size: "auto"}}
              gap="small"
              pad="xlarge"
          >
          <Box justify="center" align="start" >
              <Box pad={{"bottom": "small"}}>
              <Heading level={1} color="#104065" wordBreak="normal">
                Your partners in
                new products creating
              </Heading>
              </Box>
              <Box 
              width="300px"
              pad={{"bottom": "large"}}
              >
                <Text color="#104065" style={{ lineHeight: "32px" }}>
                  with a bear drinking afterwards.
                  UPDATED: and staying at home =)
                </Text>
              </Box>
         
            <Box 
             justify="center"
             align="center"
             height="60px"
             width="200px">
            <Button label="Let’s talk"  fill color="#F5D040"  primary/>
            </Box>
            </Box>
            <Box align="center">
              <img style={{}} src="./sectioHeader.svg" alt="Gatsby Scene" />
            </Box>
          </Grid>
      </Grommet>

    )
  }
}

export default HomeHeroSection
