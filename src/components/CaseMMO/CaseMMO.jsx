import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';

export const CaseMMO = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box style={{ height: 'auto' }}>
        <Box width="100%" align="center">
          <Heading level={2} color="brand">
            Site
          </Heading>
        </Box>
        <Grid
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          pad={{ horizontal: 'xlarge' }}
          style={isMobile ? { height: '800px' } : { height: '480px' }}
          align={textAlignVariant}
        >
          <Box align={textAlignVariant} pad={{ left: 'large', top: 'large' }}>
            <Box background={{ color: 'orange' }} pad="small">
              <img src="../assets/logoMMO.png" alt=" Logo MMO" />
            </Box>
            {isMobile || (
              <Box>
                <Box width="470px" pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                  <Heading
                    level={4}
                    color="brand"
                    style={{ lineHeight: '130%' }}
                  >
                    About client:
                  </Heading>
                </Box>

                <Box width="380px">
                  <Text
                    size="medium"
                    color="text-dark-grey"
                    style={
                      ({ fontFamily: 'HelveticaNeueCyr' },
                      { lineHeight: '150%' })
                    }
                  >
                    With GapNurse, facilities know they’re covered during
                    critical moments and unexpected absences without breaking
                    your budget.
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
          <Box align="center">
            <Box align="center">
              <img
                style={{ height: 'auto', width: '100%' }}
                src="../assets/sectionMMO.png"
                alt="The "
              />
            </Box>
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
                  With GapNurse, facilities know they’re covered during critical
                  moments and unexpected absences without breaking your budget.
                </Text>
              </Box>
            </Box>
          )}
        </Grid>
        <Box
          width="100%"
          height="200px"
          align="center"
          margin={isMobile ? { top: '30px' } : undefined}
          background={{ color: 'pink' }}
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
