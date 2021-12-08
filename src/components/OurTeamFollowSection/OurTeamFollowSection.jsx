import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { theme } from '../../utils/theme';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';
import { maxBreakpoints } from '../../utils/useBreakpoints';

const StyledMarkdown = styled(ReactMarkdown)`
  a {
    color: white;
  }
`;

const StyledGrid = styled(Grid)`
  background-color: ${theme.global.colors.brand};
  box-shadow: ${({ isMobile }) =>
    isMobile ? '10px 10px 2px 1px #fae79f' : '25px 25px 2px 1px #fae79f'};
  border-radius: 20px;
`;

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
