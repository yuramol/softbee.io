import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import PropTypes from 'prop-types';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';
import { maxBreakpoints } from '../../utils/useBreakpoints';

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
      <Box
        align="center"
        width="100%"
        pad={isMobile ? { horizontal: 'small' } : undefined}
      >
        <Heading
          level={isMobile ? 5 : 2}
          color="brand"
          style={{ textAlign: 'center' }}
          margin={{ vertical: '15px' }}
        >
          {title}
        </Heading>
      </Box>
      <Box align="center" width="100%">
        <Text
          size={isMobile ? 'small' : 'medium'}
          color="brand"
          style={{
            textAlign: isMobile ? 'start' : 'center',
            width: isMobile ? '80%' : '50%',
          }}
        >
          {text}
        </Text>
      </Box>
      <Box align="center">
        <Box maxWidth="1100px">
          <Grid
            columns={{ count: columnsCount, size: 'auto' }}
            pad={{ horizontal: 'small', top: 'xlarge' }}
            gap={isMobile ? 'medium' : 'xlarge'}
            style={{ height: 'auto' }}
            align="center"
            justify="center"
            justifyContent="around"
          >
            {list.map(({ name, position, photo }) => (
              <Box
                key={name}
                style={
                  isMobile
                    ? {
                        width: '30vw',
                        height: '30vw',
                        minWidth: '150px',
                        minHeight: '150px',
                        boxShadow: ' 0px 0px 22px rgba(200,200,200,0.3)',
                        borderRadius: '22px',
                      }
                    : {
                        width: '17vw',
                        height: '17vw',
                        maxWidth: '320px',
                        maxHeight: '320px',
                        minWidth: '190px',
                        minHeight: '190px',
                        boxShadow: ' 0px 0px 22px rgba(200,200,200,0.3)',
                        borderRadius: '22px',
                      }
                }
                background={{
                  size: 'cover',
                  image: `url(${photo})`,
                }}
              >
                <Box
                  justify="end"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  background={{
                    size: 'cover',
                    image: 'url(/assets/Rectangle69.svg)',
                  }}
                >
                  <Box pad="small">
                    <Heading
                      level={5}
                      color="brand"
                      textAlign="bottom"
                      margin={
                        isMobile ? { vertical: '0' } : { vertical: '5px' }
                      }
                      style={isMobile ? { fontSize: '14px' } : undefined}
                    >
                      {name}
                    </Heading>
                    <Text fontSize={isMobile ? '10px' : '14px'} color="brand">
                      {position}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
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
