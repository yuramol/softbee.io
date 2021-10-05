import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, Image } from 'grommet';

import { Heading } from '../../legos/typography/Heading';

export const ToolchainSection = ({ toolchain }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const headerLevel = isMobile ? 6 : 5;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  return (
    <Box>
      <Grid rows={{ count: 2, size: ['auto', 'flex'] }} pad={paddingVariant}>
        <Box align="center">
          <Heading
            textAlign="center"
            level={isMobile ? 3 : 2}
            color="brand"
            margin={{ bottom: 'xlarge' }}
          >
            What do we have in our toolchain?
          </Heading>
        </Box>
        <Box direction="row" justify="center" wrap>
          {toolchain.map(({ id, logo, name }) => (
            <Box
              key={id}
              height="250px"
              width="150px"
              pad={{ horizontal: 'medium' }}
            >
              <Box height="90px" alignSelf="center">
                <Image fill responsive={false} src={logo} alt={name} />
              </Box>

              <Heading
                level={headerLevel}
                alignSelf="center"
                color="brand"
                textAlign="center"
              >
                {name}
              </Heading>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

ToolchainSection.propTypes = {
  toolchain: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
