import React from 'react';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

const teamMembers = [
  {
    name: 'Andriy Havriluk',
    craft: 'programmer',
    imageUrl: 'url(/assets/AndriyGavriluk.png)',
  },
  {
    name: 'Artem Marochkanych',
    craft: 'programmer',
    imageUrl: 'url(/assets/ArtemMarochkanych.png)',
  },
  {
    name: 'Vitaliy Hula',
    craft: 'programmer',
    imageUrl: 'url(/assets/VitaliyHula.png)',
  },
  {
    name: 'Oleksandr Omelchenko',
    craft: 'programmer',
    imageUrl: 'url(/assets/OleksandrOmelchenko.png)',
  },
  {
    name: 'Oleg Duma',
    craft: 'programmer',
    imageUrl: 'url(/assets/OlegDuma.png)',
  },
  {
    name: 'Yuriy Moldavchuk',
    craft: 'programmer',
    imageUrl: 'url(/assets/YuriyMoldavchuk.png)',
  },

  {
    name: 'Andriy Hula',
    craft: 'designer',
    imageUrl: 'url(/assets/YuriyMoldavchuk.png)',
  },
];

export const OurTeamAboutTeam = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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
          Real people creating real results
        </Heading>
      </Box>
      <Box align="center" width="100%">
        <Text
          size={isMobile ? 'small' : 'medium'}
          color="brand"
          style={
            isMobile
              ? { textAlign: 'start', width: '80%' }
              : { textAlign: 'center', width: '50%' }
          }
        >
          Working alone sucks, so we teamed up to kick ass together. We prove
          that distance doesn’t matter when you love what you do, plus we don’t
          have to share biscuits.
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
            {teamMembers.map(({ name, craft, imageUrl }) => (
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
                  image: imageUrl,
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
                      {craft}
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
