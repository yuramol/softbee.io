import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { Heading } from '../../legos/typography/Heading';
import { useBreakpoint } from '../../utils/useBreakpoint';

const whatIconSize = ({ isSmall, isSTablet, isXSmall }) => {
  if (isXSmall) {
    return '25px';
  }
  if (isSmall) {
    return '30px';
  }
  if (isSTablet) {
    return '40px';
  }
  return '50px';
};
const whatWeDoInfo = [
  { text: 'Research', img: '/assets/icons/research.svg' },
  { text: 'Design', img: '/assets/icons/design.svg' },
  { text: 'Build', img: '/assets/icons/build.svg' },
  { text: 'Support', img: '/assets/icons/support.svg' },
];
export const WhatWeDoSection = ({ title }) => {
  const { isSTablet, isSmall, isExtraSmall } = useBreakpoint();
  const isXSmall = useMediaQuery({ query: '(max-width: 400px)' });

  return (
    <Container>
      <Heading
        textAlign="center"
        level={2}
        margin={{ top: 'none', bottom: 'large' }}
        fontWeight="500"
      >
        {title}
      </Heading>
      <Grid
        columns={{ count: isExtraSmall ? 2 : 4, size: 'auto' }}
        gap="medium"
        justify="center"
      >
        {whatWeDoInfo.map(({ text, img }) => (
          <Box key={img} direction="row" align="center" justify="center">
            <ImgFluid
              mobileWidth={whatIconSize({ isSmall, isSTablet, isXSmall })}
              src={img}
              alt="Research"
            />
            <Heading
              level={3}
              fontWeight="400"
              margin={{ left: 'medium', vertical: 'none' }}
              size={isXSmall ? '1rem' : undefined}
            >
              {text}
            </Heading>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

WhatWeDoSection.propTypes = {
  title: PropTypes.string.isRequired,
};
