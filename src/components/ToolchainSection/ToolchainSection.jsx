import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';

import { Heading } from '../../legos/typography/Heading';
import Container from '../Layout/Container';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { Paragraph } from '../../legos/typography/Paragraph';
import { ImgFluid } from '../Layout/ImgFluid';

export const ToolchainSection = ({ toolchain }) => {
  const { isSmall } = useBreakpoint();

  return (
    <Container pad={{ top: 'xlarge' }}>
      <Heading
        textAlign="center"
        level={2}
        margin={{
          top: isSmall ? 'large' : 'none',
          bottom: isSmall ? 'medium' : 'none',
        }}
        fontWeight="500"
      >
        {/* todo new field in markdown */}
        What do we have in our toolchain?
      </Heading>
      <Box wrap direction="row" justify="center" margin="0, auto">
        {toolchain.map(({ logo, name }) => (
          <Box
            key={name}
            width={isSmall ? '145px' : { min: '20%' }}
            pad={{ horizontal: 'medium', top: 'large' }}
          >
            <ImgFluid height="80px" src={logo} alt={name} />
            <Paragraph
              lineHeight="1.2"
              color="brand"
              textAlign="center"
              size={isSmall ? 'xlarge' : 'xxlarge'}
            >
              {name}
            </Paragraph>
          </Box>
        ))}
      </Box>
    </Container>
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
