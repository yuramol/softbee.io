import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import PropTypes from 'prop-types';

import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { maxBreakpoints } from '../../utils/useBreakpoints';

import Container from '../Layout/Container';
import { ImgCover } from '../Layout/ImgCover';
import { CardTeam, CardTeamImageWrapper, CardTeamFooter } from './styled';

export const OurTeamAboutTeam = ({ title, text, list }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('bMobile', size);
  const columnsCount = isMobile ? 2 : 3;

  return (
    <Box
      height={isMobile ? { min: '450px ' } : { min: '600px' }}
      pad={{ vertical: 'xlarge' }}
      background={{ color: '#fff' }}
    >
      <Container>
        <Box
          align="center"
          width="100%"
          pad={isMobile ? { horizontal: 'small' } : undefined}
        >
          <Heading
            level={isMobile ? 5 : 2}
            color="brand"
            textAlign="center"
            margin={{ vertical: '15px' }}
          >
            {title}
          </Heading>
        </Box>
        <Box
          align="center"
          margin={{ horizontal: 'auto' }}
          width={isMobile ? '80%' : '50%'}
        >
          <Text
            size={isMobile ? 'small' : 'medium'}
            color="brand"
            textAlign="center"
          >
            {text}
          </Text>
        </Box>
        <Box align="center">
          <Box width="100%">
            <Grid
              columns={{ count: columnsCount, size: 'auto' }}
              pad={{ top: 'xlarge' }}
              gap={isMobile ? 'medium' : 'xlarge'}
              align="center"
              justify="center"
              justifyContent="around"
            >
              {list.map(({ name, position, photo }) => (
                <CardTeam key={name}>
                  <CardTeamImageWrapper bottomFlex="100%">
                    <ImgCover src={photo} />
                  </CardTeamImageWrapper>
                  <CardTeamFooter pad="small" justify="end" alignSelf="end">
                    <Heading
                      level={5}
                      color="brand"
                      textAlign="bottom"
                      fontSize={isMobile ? '14px' : undefined}
                      margin={
                        isMobile ? { vertical: '0' } : { vertical: '5px' }
                      }
                    >
                      {name}
                    </Heading>
                    <Text fontSize={isMobile ? '10px' : '14px'} color="brand">
                      {position}
                    </Text>
                  </CardTeamFooter>
                </CardTeam>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

OurTeamAboutTeam.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      photo: PropTypes.string,
    }),
  ).isRequired,
};
