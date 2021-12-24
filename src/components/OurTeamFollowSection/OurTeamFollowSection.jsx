import React from 'react';
import PropTypes from 'prop-types';

import { Box, ResponsiveContext } from 'grommet';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import { StyledMarkdown, StyledGrid } from './styled';
import Container from '../Layout/Container';

export const OurTeamFollowSection = ({ text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = 1;
  const isMobile = maxBreakpoints('mobile', size);

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={{ vertical: 'xlarge' }}
      background={{ color: '#fff' }}
    >
      <Container align="center">
        <StyledGrid
          isMobile={isMobile}
          columns={{ count: columnsCount, size: 'auto' }}
          pad={{ vertical: 'large', horizontal: 'xlarge' }}
          justify="center"
          round
          gap="small"
        >
          <Heading
            color="text-white"
            level={isMobile ? 4 : 2}
            textAlign="center"
            margin={{ vertical: '0' }}
          >
            <StyledMarkdown>{text}</StyledMarkdown>
          </Heading>
        </StyledGrid>
      </Container>
    </Box>
  );
};

OurTeamFollowSection.propTypes = {
  text: PropTypes.string.isRequired,
};
