import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Box } from 'grommet';

import Container from '../Layout/Container';
import { BoxWithWings } from '../../legos/Box/BoxWithWings';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { theme } from '../../utils/theme';

const StyledMarkdown = styled(ReactMarkdown)`
  a {
    color: #fff;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.global.colors['accent-1']};
    }
  }
`;

export const OurTeamFollowSection = ({ text }) => {
  const { isSmall, isSTablet, isDesktopOrTablet } = useBreakpoint();

  const padVariant = !isDesktopOrTablet ? 'xlarge' : 'large';

  return (
    <BoxWithWings
      background="text-white"
      isdesktopOrTablet={isDesktopOrTablet}
      pad={{ vertical: isDesktopOrTablet ? 'xlarge' : '8.75rem' }}
      justify="center"
      height={{ min: !isDesktopOrTablet ? '900px' : undefined }}
    >
      <Container align="center">
        <Box
          elevation={isSmall ? 'yellowMobileShadow' : 'yellowDesktopShadow'}
          background="brand"
          width={{ max: '1000px', width: isDesktopOrTablet ? '90%' : '100%' }}
          pad={{
            vertical: padVariant,
            horizontal: padVariant,
          }}
          round="20px"
        >
          <Heading
            color="text-white"
            level={3}
            size={isSTablet ? '2.125rem' : '2.5rem'}
            fontWeight="400"
            textAlign="center"
            margin={{ vertical: 'none' }}
          >
            <StyledMarkdown>{text}</StyledMarkdown>
          </Heading>
        </Box>
      </Container>
    </BoxWithWings>
  );
};

OurTeamFollowSection.propTypes = {
  text: PropTypes.string.isRequired,
};
