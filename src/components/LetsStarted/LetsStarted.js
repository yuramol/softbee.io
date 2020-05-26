import React from 'react';
import { Box, TextInput, FormField } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { StyledTextInput } from '../../legos/TextInput/TextInput';
import { TextColor3 } from '../../utils/colors';

class LetsStarted extends React.Component {
  render() {
    return (
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad="xlarge"
        gap="medium"
      >
        <Box
          direction="row"
          pad={{ horizontal: 'xlarge' }}
          justify="center"
          alignContent="center"
          background="#104065"
          height="363px"
          width="1000px"
          style={{
            boxShadow: '0px 0px 75px',
            color: '#F3F3F3',
            borderRadius: '20px',
          }}
          round
          gap="small"
        >
          <Box
            style={{ textAlign: 'start' }}
            justify="center"
            margin={{  bottom: 'small', horizontal: 'medium' }}
          >
            <Box pad={{bottom: "medium"}}>
            <Heading
              level={2}
              color={TextColor3}
              margin="xsmall"
              style={{ fontWeight: '600' }}
            >
              Hey! Let’s get started. We’re SoftBee, and you are? &#128075;
            </Heading>
            </Box>
            <Box pad={{top: "large"}}>
              <FormField>
                <StyledTextInput placeholder="Lovely Person" />
              </FormField>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default LetsStarted;
