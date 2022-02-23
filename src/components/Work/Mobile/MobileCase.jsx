import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import styled from 'styled-components';
import Container from '../../Layout/Container';
import { Button } from '../../../legos/Button/Button';
import { Heading } from '../../../legos/typography/Heading';
import { Paragraph } from '../../../legos/typography/Paragraph';
import { useBreakpoint } from '../../../utils/useBreakpoint';
import { ImgFluid } from '../../Layout/ImgFluid';
import { BoxOrder } from '../../../legos/Box/BoxOrder';

const BoxCenterMobile = styled(Box)`
  text-align: ${({ center }) => center && 'center'};
`;

const getSizeForGrid = ({ isPosition, isSmall }) => {
  if (isSmall) {
    return 'full';
  }
  if (isPosition) {
    return ['58.3333%', 'auto'];
  }
  return ['auto', '50%'];
};

export const MobileCase = ({
  data: {
    imagePreview: { image, imageRetina, imageSecond, imageSecondRetina },
    preview: { title, text },
    path,
  },
  isPosition,
}) => {
  const { isSmall, isDesktopOrTablet } = useBreakpoint();
  const altMobileCase = 'Mobile case image';
  const link = `/work/${path}`;
  return (
    <Container>
      <Grid
        columns={getSizeForGrid({ isPosition, isSmall })}
        gap={isDesktopOrTablet ? 'medium' : 'xlarge'}
        align="center"
      >
        <BoxOrder
          order={isPosition ? 1 : 0}
          align={isSmall ? 'center' : 'start'}
        >
          <Heading
            margin={{ bottom: 'large', top: 'none' }}
            level={2}
            textAlign={isSmall ? 'center' : 'start'}
          >
            {title}
          </Heading>

          <Paragraph
            margin={{ bottom: isSmall ? 'none' : 'large', top: 'none' }}
            size={isSmall ? 'medium' : 'xlarge'}
            color="text-dark-grey"
          >
            {text}
          </Paragraph>

          {isSmall || (
            <Box height={{ min: '60px' }} width={{ min: '244px' }}>
              <Button href={link} label="See case study" primary fill />
            </Box>
          )}
        </BoxOrder>
        <Box
          justify={isSmall ? 'center' : 'around'}
          gap="small"
          direction="row"
          align="center"
        >
          <BoxCenterMobile
            center={!!isSmall}
            align={isSmall ? 'center' : undefined}
          >
            <picture>
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                srcSet={`/${imageRetina} 2x`}
                src={`/${image}`}
                alt={altMobileCase}
              />
            </picture>
          </BoxCenterMobile>
          <BoxCenterMobile
            center={!!isSmall}
            align={isSmall ? 'center' : undefined}
          >
            <picture>
              <ImgFluid
                mobileWidth={isSmall && '80%'}
                src={`/${imageSecond}`}
                srcSet={`/${imageSecondRetina} 2x`}
                alt={altMobileCase}
              />
            </picture>
          </BoxCenterMobile>
        </Box>
        {isSmall && (
          <Box
            margin={{ horizontal: 'auto' }}
            height={{ min: '60px' }}
            width={{ min: '244px' }}
          >
            <Button href={link} label="See case study" primary fill />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

MobileCase.propTypes = {
  data: PropTypes.shape({
    imagePreview: PropTypes.shape({
      image: PropTypes.string,
      imageRetina: PropTypes.string,
      imageSecond: PropTypes.string,
      imageSecondRetina: PropTypes.string,
    }),
    preview: PropTypes.shape({
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isPosition: PropTypes.bool,
};

MobileCase.defaultProps = {
  isPosition: false,
};
