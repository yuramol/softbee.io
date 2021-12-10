import React from 'react';
import PropTypes from 'prop-types';

import { Box, ResponsiveContext } from 'grommet';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import { StyledMarkdown, StyledGrid } from './styled';

export const OurTeamFollowSection = ({ text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = 1;
  const isMobile = maxBreakpoints('mobile', size);
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={paddingVariant}
      gap="medium"
      background={{ color: '#fff' }}
    >
      <StyledGrid
        isMobile={isMobile}
        columns={{ count: columnsCount, size: 'auto' }}
        pad={
          !isMobile
            ? { vertical: 'large', horizontal: 'xlarge' }
            : { vertical: 'xlarge' }
        }
        justify="center"
        round
        gap="small"
      >
        <Heading
          color="text-white"
          level={isMobile ? 5 : 2}
          textAlign="center"
          margin={{ vertical: '0' }}
        >
          <StyledMarkdown>{text}</StyledMarkdown>
        </Heading>
      </StyledGrid>
    </Box>
  );
};

OurTeamFollowSection.propTypes = {
  text: PropTypes.string.isRequired,
};
