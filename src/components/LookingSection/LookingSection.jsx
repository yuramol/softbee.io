import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Container from '../Layout/Container';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';

export const LookingSection = ({ title, text }) => {
  const { isSmall, isSTablet } = useBreakpoint();

  return (
    <Container>
      <Box
        width={{ max: '1000px', width: '100%' }}
        margin={{ horizontal: 'auto' }}
        elevation="custom"
        round={isSmall ? '20px' : '55px'}
        pad="large"
      >
        <Box>
          <Heading
            textAlign="center"
            fontWeight="700"
            level={2}
            margin={{ top: 'none', bottom: 'none' }}
            size={isSTablet ? '2.125rem' : '2.5rem'}
          >
            {title}
          </Heading>
          <Box direction="row" justify="center" align="center">
            {isSmall || <img src="/assets/gears.svg" alt="Gears" />}
            <Heading
              margin={{
                vertical: isSmall ? 'large' : 'none',
                horizontal: 'large',
              }}
              level={2}
              textAlign="center"
            >
              {text}
            </Heading>
            {isSmall || (
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
