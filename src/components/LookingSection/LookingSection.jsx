import React from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';

import Container from '../Layout/Container';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const LookingSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('small', size);
  const isTablet = maxBreakpoints('sTablet', size);

  return (
    <Container pad={{ top: 'xlarge' }}>
      <Box
        width={{ max: '1000px', width: '100%' }}
        margin={{ horizontal: 'auto' }}
        elevation="custom"
        round={isMobile ? '20px' : '55px'}
        pad="large"
      >
        <Box>
          <Heading
            textAlign="center"
            fontWeight="700"
            level={2}
            margin={{ top: 'none', bottom: 'none' }}
            size={isTablet ? '2.125rem' : '2.5rem'}
          >
            {title}
          </Heading>
          <Box direction="row" justify="center" align="center">
            {isMobile || <img src="/assets/gears.svg" alt="Gears" />}
            <Heading
              margin={{
                vertical: isMobile ? 'large' : 'none',
                horizontal: 'large',
              }}
              level={2}
              textAlign="center"
            >
              {text}
            </Heading>
            {isMobile || (
              <img
                width="81px"
                height="62px"
                src="/assets/arrow.svg"
                alt="Arrows"
              />
            )}
          </Box>
          <Box
            height={{ min: '60px' }}
            width={{ min: '244px' }}
            margin={{
              horizontal: 'auto',
            }}
          >
            <ButtonLetsTalk primary fill label="Let’s talk 👋" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

LookingSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
