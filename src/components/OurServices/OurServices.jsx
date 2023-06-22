import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import { Heading } from '../../legos/typography/Heading';
import { ImgFluid } from '../Layout/ImgFluid';
import { useBreakpoint } from '../../utils/useBreakpoint';

const getSizeForBox = (isSmall, index) => {
  if (isSmall) {
    return '50%';
  }
  if (index % 2 === 0) {
    return '60%';
  }
  return '40%';
};

export const OurServices = ({ services }) => {
  const { isSmall } = useBreakpoint();
  const itemsPosition = isSmall ? 'center' : 'start';
  const rowOrColumn = isSmall ? 'column' : 'row';
  const marginItems = isSmall
    ? { left: 'none', top: '10px', bottom: 'none' }
    : { left: '20px', right: 'none', vertical: 'none' };

  return (
    <Box
      background="brand"
      round={isSmall ? '1.56rem' : '3.5rem'}
      width="59rem"
      pad={{ horizontal: isSmall ? 'medium' : 'xlarge', vertical: 'medium' }}
      direction="row"
      wrap
      margin={{ horizontal: 'auto', bottom: 'xlarge' }}
    >
      {services?.map(({ name, image }, index) => {
        return (
          <Box
            key={name}
            margin={{ bottom: 'medium', top: 'medium' }}
            direction={rowOrColumn}
            width={getSizeForBox(isSmall, index)}
            align={itemsPosition}
          >
            <ImgFluid
              mobileWidth={isSmall ? '3rem' : '5rem'}
              src={`/${image}`}
              alt={name}
            />
            <Heading
              fontWeight={isSmall ? '400' : '600'}
              alignSelf="center"
              size={isSmall ? 'xlarge' : undefined}
              margin={marginItems}
              textAlign={itemsPosition}
              level={4}
              color="#fffff"
            >
              {name}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

OurServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes?.object).isRequired,
};
