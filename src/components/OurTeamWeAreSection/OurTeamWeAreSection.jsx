import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';
import { Text } from '../../legos/typography/Text';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';

export const OurTeamWeAreSection = ({ text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('bMobile', size);

  return (
    <Box height="auto">
      <Container>
        <Grid
          columns={{ count: columnsCount, size: 'auto' }}
          pad={{ vertical: 'xlarge' }}
          gap="large"
        >
          <Box>
            <ImgFluid
              src="/assets/sectionHeader.svg"
              alt="People are creating a website"
            />
          </Box>
          <Box width="100%" height="auto" align="center" justify="center">
            <Text
              color="brand"
              size={isMobile ? 'small' : 'medium'}
              align="center"
              whiteSpace="pre-line"
            >
              {text}
            </Text>
            <Box
              justify="center"
              align="center"
              height="50px"
              width="194px"
              margin={{ top: '50px' }}
            >
              <ButtonLetsTalk
                label="Let’s talk4   &#128075;"
                color="accent-1"
                primary
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

OurTeamWeAreSection.propTypes = {
  text: PropTypes.string.isRequired,
};
