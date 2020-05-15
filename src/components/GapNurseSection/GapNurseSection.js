import React from "react";
import { Grommet, Box, Button, Grid, Heading} from 'grommet';

import { Text } from "../../legos/typography/Text";

import { theme } from "../../utils/theme";


class GapNurseSection extends React.Component {
  render() {

    return (
      <Grommet theme={theme}>
        <Box background={{"color": "#F0F6F4"}}>
          <Grid
             columns={{count: 2,size: "auto"}}
              gap="small"
              pad="xlarge"
          >
          <Box justify="center" align="start" >
              <Box
              width="470px" 
              pad={{"bottom": "small"}}>
              <Heading level={2} color="#104065" wordBreak="normal">
              They really help to fight COVID-19 in US
              </Heading>
              </Box>
              <Box 
              width="380px"
              pad={{"bottom": "medium"}}>
                <Text color="#104065" style={{fontFamily: 'HelveticaNeueCyr'}}>
                With GapNurse, facilities know they’re covered 
                during critical moments and unexpected absences without breaking your budget.
                </Text>
              </Box>
              <Button
                  style={{"textDecorationLine": "underline"}}
                  plain
                  label="See case study"
                  color="#25BBC5"
                  onClick={() => {}}
              />
            </Box>
            <Box align="center">
              <img style={{}} src="./phoneGapnurse.svg" alt="Gatsby Scene" />
            </Box>
          </Grid>
          </Box>
      </Grommet>

    )
  }
}

export default GapNurseSection
