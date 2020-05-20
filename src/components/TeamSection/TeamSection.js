import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { StyledButton } from '../../legos/Button/Button';
import { TextColor, TextColor2 } from '../../utils/colors';

class TeamSection extends React.Component {
  render() {
    return (
      <Grid columns={{ count: 2, size: 'auto' }} gap="small" pad="xlarge">
        <Box align="center">
          <img src="./assets/section.svg" alt="Gatsby Scene" />
        </Box>
        <Box justify="center" align="start">
          <Box>
            <Heading level={2} color={TextColor}>
              We love taking products from vision to reality.
            </Heading>
          </Box>
          <Box width="491px" pad={{ bottom: 'large' }}>
            <Box pad={{ bottom: 'medium' }}>
              <Text size="medium" color={TextColor2}>
                Somethings about how we work. We do all sorts of programming:
              </Text>
              <Text size="medium" color={TextColor2}>
                Web, mobile, backend, desktop development.{' '}
              </Text>
              <Text size="medium" color={TextColor2}>
                JS is our lovest language. Blala something more.
              </Text>
            </Box>
            <Box pad={{ bottom: 'large' }}>
              <Text size="medium" color={TextColor2}>
                We are a team of passionated mobile and web developers who love
                what they do. Also we love being on the same page with our
                clients and to deliver real cases to users.
              </Text>
            </Box>
            <Box justify="center" align="center" height="50px" width="200px">
              <StyledButton
                label="Meet our team &#128074;"
                fill
                color="#F5D040"
                primary
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default TeamSection;
