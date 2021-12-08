import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';

import styled from 'styled-components';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import Container from '../Layout/Container';

const StyledGrid = styled(Grid)`
  box-shadow: 0 0 30px 10px;
  color: #e5e5e5;
  border-radius: 55px;
`;

//це тимчасове рішення, краще відповідну картинку, одразу а не крутити
const LookingSettingImg = styled.img`
  transform: rotate(-15.26deg);
`;

export const LookingSection = ({ title, text }) => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 3;
  const isMobile = maxBreakpoints('mobile', size);
  const isTablet = maxBreakpoints('tablet', size);
  const fontSizeTablet = isTablet ? 4 : 2;
  const fontSizeMobile = isMobile ? 3 : 2;
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
    >
      <Container>
        <StyledGrid
          columns={{ count: columnsCount, size: 'auto' }}
          pad="medium"
          margin={isMobile ? 'medium' : undefined}
          justify="center"
          alignContent="center"
          round
          gap="small"
        >
          <Box justify="center" pad={{ vertical: 'large' }}>
            <LookingSettingImg src="/assets/gears.svg" alt="Gears" />
          </Box>
          {!isMobile && (
            <Box
              pad={{ vertical: 'large' }}
              margin={{ vertical: 'medium' }}
              width={isTablet ? '24em' : '34em'}
            >
              <Heading
                textAlign="center"
                level={fontSizeTablet}
                color="brand"
                margin="xsmall"
                fontWeight="600"
              >
                {title}
              </Heading>
              <Heading textAlign="center" level={fontSizeTablet} color="brand">
                {text}
              </Heading>
              <Box
                height="60px"
                width="200px"
                margin={{ top: 'medium', horizontal: 'auto' }}
              >
                <ButtonLetsTalk label="Let’s talk" color="accent-1" />
              </Box>
            </Box>
          )}
          {isMobile && (
            <Box pad={{ vertical: 'small' }} justify="center">
              <Heading
                textAlign="center"
                level={fontSizeMobile}
                color="brand"
                margin="xsmall"
                fontWeight="600"
              >
                {title}
              </Heading>
              <Heading
                textAlign="center"
                level={fontSizeMobile}
                color="brand"
                fontWeight="300"
              >
                {text}
              </Heading>
            </Box>
          )}
          <Box justify="center" pad={{ vertical: 'large' }}>
            <img src="/assets/arrow.svg" alt="Arrows" />
          </Box>
        </StyledGrid>
      </Container>
    </Box>
  );
};

LookingSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
