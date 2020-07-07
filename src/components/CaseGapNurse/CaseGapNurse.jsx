import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { ButtonNextCase } from '../ButtonNextCase/ButtonNextCase';

export const CaseGapNurse = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1110px)' });
  const columnsCountTablet = isTabletOrMobile ? 1 : 2;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box
        style={isMobile ? { height: 'auto' } : { height: '835px' }}
        background={
          isMobile
            ? undefined
            : {
                position: 'bottom',
                size: 'small',
                image: 'url(/assets/backgroundCaseGapnurse.svg)',
              }
        }
      >
        <Box width="100%" align="center">
          <Heading level={2} color="brand">
            Mobile app
          </Heading>
        </Box>
        <Grid
          columns={['auto', 'auto']}
          pad={{ horizontal: 'xlarge' }}
          style={isMobile ? { height: 'auto' } : { height: '480px' }}
          align={textAlignVariant}
        >
          <Box align={textAlignVariant} pad={{ left: 'large', top: 'large' }}>
            <Box>
              <img src="/assets/logoGapNurse.svg" alt=" Gap Nurse " />
            </Box>
            {isMobile || (
              <Box>
                <Box width="470px" pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                  <Heading
                    level={4}
                    color="brand"
                    style={{ lineHeight: '130%', fontSize: '24px' }}
                    margin={{ vertical: '10px' }}
                  >
                    About client:
                  </Heading>
                </Box>

                <Box width="380px">
                  <Text
                    size="medium"
                    color="text-dark-grey"
                    style={{
                      fontFamily: 'HelveticaNeueCyr',
                      lineHeight: '150%',
                    }}
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
            <Grid
              columns={{ count: columnsCountTablet, size: 'auto' }}
              gap="medium"
            >
              <Box align="center">
                <img
                  style={{ height: 'auto', width: '100%' }}
                  src="/assets/PhoneGapNurse.png"
                  alt="The iphone that shows the application GapNurse"
                />
              </Box>
              {isTabletOrMobile || (
                <Box align="center">
                  <img
                    style={{ height: 'auto', width: '100%' }}
                    src="/assets/PhoneGapNurse2.png"
                    alt="The iphone that shows the application GapNurse"
                  />
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>
        {isMobile && (
          <Box align="left" pad={{ horizontal: 'xlarge' }}>
            <Box style={{ width: '100%' }}>
              <Heading
                level={6}
                color="brand"
                style={{ lineHeight: '100%' }}
                margin={{ vertical: '10px' }}
              >
                About client:
              </Heading>
            </Box>
            <Box width="100%">
              <Text
                color="text-dark-grey"
                style={{ fontFamily: 'HelveticaNeueCyr', lineHeight: '150%' }}
              >
                With GapNurse, facilities know they’re covered during critical
                moments and unexpected absences without breaking your budget.
              </Text>
            </Box>
          </Box>
        )}
        <Box
          width="100%"
          height={isMobile ? '130px' : '150px'}
          align="center"
          margin={isMobile ? { top: '30px' } : { top: '70px' }}
          background={{ color: '#5E5999' }}
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
          src="/assets/backgroundScreenshotsGapNurse.png"
          alt="screenshots GapNurse"
        />
      </Box>
      <ButtonNextCase />
    </Box>
  );
};
