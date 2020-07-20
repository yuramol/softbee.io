import React from 'react';
import { Box, Grid } from 'grommet';
import { useMediaQuery } from 'react-responsive';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { ButtonNextCase } from '../ButtonNextCase/ButtonNextCase';

export const CaseMMO = () => {
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
          columns={['auto', 'auto']}
          pad={
            isTablet
              ? { horizontal: 'large', vertical: 'large' }
              : { horizontal: 'xlarge', vertical: 'large' }
          }
          style={isMobile ? { height: 'auto' } : { height: 'auto' }}
          align={textAlignVariant}
        >
          <Box
            align={textAlignVariant}
            pad={isTablet ? { top: 'large' } : { left: 'large', top: 'large' }}
          >
            <Box background={{ color: '#241F43' }} pad="small">
              <img src="/assets/logoMMO.png" alt="Logo of MMO.CAT project" />
            </Box>
            {isMobile || (
              <Box>
                <Box pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                  <Heading
                    level={5}
                    color="brand"
                    style={{ lineHeight: '130%' }}
                    margin={{ vertical: 'xsmall' }}
                  >
                    About client:
                  </Heading>
                </Box>

                <Box
                  style={isTablet ? { width: '320px' } : { width: '370px' }}
                  pad={{ right: 'large' }}
                >
                  <Text
                    size="medium"
                    color="text-dark-grey"
                    style={{
                      fontFamily: 'HelveticaNeueCyr',
                      lineHeight: '150%',
                    }}
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
              src="/assets/sectionMMO.png"
              alt="Screenshot of MMO website page "
            />
          </Box>
        </Grid>
        {isMobile && (
          <Box align="start" pad={{ horizontal: 'xlarge' }}>
            <Box style={{ width: '100%' }}>
              <Heading
                level={6}
                color="brand"
                style={{ lineHeight: '130%' }}
                margin={{ vertical: 'xsmall' }}
              >
                About client:
              </Heading>
            </Box>
            <Box width="100%">
              <Text
                color="text-dark-grey"
                style={{ fontFamily: 'HelveticaNeueCyr', lineHeight: '150%' }}
              >
                We provided full-stack development service for end-to-end
                websites of MMO.cat team
              </Text>
            </Box>
          </Box>
        )}
        <Box
          width="100%"
          style={isMobile ? { height: '130px' } : { height: '210px' }}
          align="center"
          justify="center"
          margin={isMobile ? { top: '30px' } : undefined}
          background={{ color: '#FF1B60' }}
        >
          <Grid
            columns={['1/3', '1/3', '1/3']}
            style={
              isMobile
                ? { width: '100%', height: isMobile ? '130px' : '150px' }
                : { width: 'auto' }
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
                margin={{ vertical: isMobile ? 'none' : 'small' }}
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
                margin={{ vertical: isMobile ? 'none' : 'small' }}
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
                margin={{ vertical: isMobile ? 'none' : 'small' }}
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
          src="/assets/backgroundCaseMMO.png"
          alt="Screenshots of MMO.CAT website"
        />
      </Box>
      <ButtonNextCase url="/gapnurse-case" />
    </Box>
  );
};
