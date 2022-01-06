import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { ResponsiveContext, Box } from 'grommet';

import Container from '../Layout/Container';
import { BoxWithWings } from '../../legos/Box/BoxWithWings';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';
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
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isdesktopOrTablet = maxBreakpoints('desktopOrTablet', size);
  const isTablet = maxBreakpoints('sTablet', size);

  const paddVariant = !isdesktopOrTablet ? 'xlarge' : 'large';

  return (
    <BoxWithWings
      background="text-white"
      isdesktopOrTablet={isdesktopOrTablet}
      pad={{ vertical: isdesktopOrTablet ? 'xlarge' : '8.75rem' }}
      justify="center"
      height={{ min: !isdesktopOrTablet ? '900px' : undefined }}
    >
      <Container align="center">
        <Box
          elevation={isMobile ? 'yellowMobileShadow' : 'yellowPCShadow'}
          background="brand"
          width={{ max: '1000px', width: '100%' }}
          pad={{
            vertical: paddVariant,
            horizontal: paddVariant,
          }}
          round="20px"
        >
          <Heading
            color="text-white"
            level={3}
            size={isTablet ? '2.125rem' : '2.5rem'}
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
