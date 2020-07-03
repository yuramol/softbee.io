import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';

export const CaseMMO = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isTablet = useMediaQuery({ query: '(max-width: 990px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box>
        <Box width="100%" align="center">
          <Heading
            level={isMobile ? 4 : 2}
            color="brand"
            style={{ textAlign: 'center' }}
          >
            Web-site MMO.CAT
          </Heading>
        </Box>
        <Grid
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          pad={isTablet ? { horizontal: 'large' } : { horizontal: 'xlarge' }}
          style={isMobile ? { height: '550px' } : { height: '450px' }}
          align={textAlignVariant}
        >
          <Box
            align={textAlignVariant}
            pad={isTablet ? { top: 'large' } : { left: 'large', top: 'large' }}
          >
            <Box background={{ color: '#241F43' }} pad="small">
              <img src="../assets/logoMMO.png" alt=" Logo MMO" />
            </Box>
            {isMobile || (
              <Box>
                <Box pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                  <Heading
                    level={4}
                    color="brand"
                    style={{ lineHeight: '130%' }}
                  >
                    About client:
                  </Heading>
                </Box>

                <Box style={isTablet ? { width: '340px' } : { width: '380px' }}>
                  <Text
                    size="medium"
                    color="text-dark-grey"
                    style={
                      ({ fontFamily: 'HelveticaNeueCyr' },
                      { lineHeight: '150%' })
                    }
                  >
                    We provided full-stack development service for end-to-end
                    websites of MMO.cat team
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
          <Box
            style={{ height: '100%' }}
            align="center"
            justify="center"
            pad={isMobile ? { horizontal: 'large' } : undefined}
          >
            <img
              style={{ height: 'auto', width: '100%' }}
              src="../assets/sectionMMO.png"
              alt="screenshot of MMO website page "
            />
          </Box>
          {isMobile && (
            <Box align="center">
              <Box>
                <Heading level={4} color="brand" style={{ lineHeight: '130%' }}>
                  About client:
                </Heading>
              </Box>
              <Box width="380px">
                <Text
                  color="text-dark-grey"
                  style={
                    ({ fontFamily: 'HelveticaNeueCyr' }, { lineHeight: '150%' })
                  }
                >
                  We provided full-stack development service for end-to-end
                  websites of MMO.cat team
                </Text>
              </Box>
            </Box>
          )}
        </Grid>
        <Box
          width="100%"
          style={isMobile ? { height: 'auto' } : { height: '210px' }}
          align="center"
          justify="center"
          margin={isMobile ? { top: '30px' } : undefined}
          background={{ color: '#FF1B60' }}
        >
          <Grid
            columns={['1/3', '1/3', '1/3']}
            style={
              isMobile ? { width: '100%', height: '150px' } : { width: 'auto' }
            }
            pad="small"
          >
            <Box
              style={
                isMobile
                  ? { width: 'auto', justifyContent: 'center' }
                  : { width: '250px' }
              }
              align="center"
              pad={isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }}
            >
              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                margin={{ vertical: 'small' }}
              >
                Technologies:
              </Heading>

              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                style={{ fontWeight: '700', lineHeight: '16px' }}
                margin={{ vertical: 'small' }}
              >
                React, Vue
              </Heading>
            </Box>
            <Box
              style={
                isMobile
                  ? { width: 'auto', justifyContent: 'center' }
                  : { width: '250px' }
              }
              align="center"
              pad={isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }}
            >
              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                margin={{ vertical: 'small' }}
              >
                Languages:
              </Heading>
              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                style={{ fontWeight: '700', lineHeight: '16px' }}
                margin={{ vertical: 'small' }}
              >
                JS
              </Heading>
            </Box>
            <Box
              style={
                isMobile
                  ? { width: 'auto', justifyContent: 'center' }
                  : { width: '250px' }
              }
              align="center"
              pad={isMobile ? { horizontal: 'xsmall' } : { horizontal: '2em' }}
            >
              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                margin={{ vertical: 'small' }}
              >
                Time:
              </Heading>
              <Heading
                level={isMobile ? undefined : 5}
                color="white"
                style={{ fontWeight: '700', lineHeight: '16px' }}
                margin={{ vertical: 'small' }}
              >
                124 h
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box>
        <img
          style={{ width: '100%', height: 'auto' }}
          src="../assets/backgroundCaseMMO.png"
          alt="screenshots GapNurse"
        />
      </Box>
    </Box>
  );
};
