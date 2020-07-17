import React from 'react';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Heading } from '../../legos/typography/Heading';
import { Text } from '../../legos/typography/Text';

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
          Real peaole creating real results
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
            <Box
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
                image: 'url(/assets/AndriyGavriluk.png)',
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
                    style={isMobile ? { fontSize: '14px' } : undefined}
                    color="brand"
                    textAlign="bottom"
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                  >
                    Andriy Gavriluk
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
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
                image: 'url(/assets/ArtemMarochkanych.png)',
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
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                    style={isMobile ? { fontSize: '14px' } : undefined}
                  >
                    Artem Marochkanych
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
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
                image: 'url(/assets/OleksandrOmelchenko.png)',
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
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                    style={isMobile ? { fontSize: '14px' } : undefined}
                  >
                    Oleksandr Omelchenko
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
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
                image: 'url(/assets/VitaliyHula.png)',
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
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                    style={isMobile ? { fontSize: '14px' } : undefined}
                  >
                    Vitaliy Hula
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
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
                image: 'url(/assets/MoldavchukYurij.png)',
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
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                    style={isMobile ? { fontSize: '14px' } : undefined}
                  >
                    Moldavchuk Yurij
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
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
                image: 'url(/assets/OlegDuma.png)',
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
                    margin={isMobile ? { vertical: '0' } : { vertical: '5px' }}
                    style={
                      isMobile
                        ? { fontSize: '14px', lineHeight: '22px' }
                        : { lineHeight: '22px' }
                    }
                  >
                    Oleg Duma
                  </Heading>
                  <Text size={isMobile ? 'small' : 'medium'} color="brand">
                    programmer
                  </Text>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
