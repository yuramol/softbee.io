import React from "react"
import { Grommet, Box, Button, Grid} from "grommet"


import { theme } from "../../utils/theme"
import { Heading } from "../../legos/typography/Heading"
import { StyledButton } from "../../legos/Button/Button"
import { Text } from "../../legos/typography/Text"

class WorkHeroSection extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box justify="center" align="center">
          <Heading level={1} color="#104065" wordBreak="normal">
            Work
          </Heading>
        </Box>
        <Grid
          columns={{ count: 2, size: "auto" }}
          gap="small"          
        >
          <Box
            width="66wh"
            justify="center"
            align="start"
            pad={{ bottom: "small", left: "large" }}
          >
            <Box pad={{ bottom: "medium"}}>
              <Heading level={2} color="#104065" wordBreak="normal">
                How we work and what we do. And a bit of our favorite projects
                and the impact they've made.
              </Heading>
            </Box>

            <Box width="355px" pad={{ bottom: "small" }}>
              <Text size="medium" color="#104065">
                We work really well together but are awesome separately, too.
                Hire only what you need, we’ll build our team around your
                project.
              </Text>
            </Box>
            <Box width="375px"pad={{ bottom: "large" }}>
              <Text size="medium" color="#104065" style={{ lineHeight: "24px" }}>
              From small HTML-template, to building entire applications, 
              we’ve worked on projects of all sizes. 
              </Text>
            </Box>
            <Box justify="center" align="center" height="60px" width="200px">
              <StyledButton label="How we work" fill color="#F5D040" primary />
            </Box>
          </Box>
          <Box align="center">
            <img
              style={{}}
              src="./assets/background-work.svg"
              alt="Gatsby Scene"
            />
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default WorkHeroSection
