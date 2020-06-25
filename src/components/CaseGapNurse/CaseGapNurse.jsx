import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { ButtonNextCase } from '../ButtonNextCase/ButtonNextCase';

export const CaseGapNurse = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const columnsCounts = size === 'small' ? 1 : 2;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1010px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box
        height="830px"
        background={{
          position: 'bottom',
          size: 'small',
          image: 'url(../assets/backgroundCaseGapnurse.svg)',
        }}
      >
        <Box width="100%" align="center">
          <Heading size="medium" level={2} color="brand">
            Mobile app
          </Heading>
        </Box>
        <Grid
          columns={{ count: columnsCount, size: ['auto', 'auto'] }}
          pad={{ horizontal: 'xlarge' }}
          style={{ height: '480px' }}
          align={textAlignVariant}
        >
          <Box
            justify="start"
            align={textAlignVariant}
            pad={{ left: 'large', top: 'large' }}
          >
            <Box>
              <img src="../assets/logoGapNurse.svg" alt=" Gap Nurse " />
            </Box>
            <Box
              width="470px"
              size="small"
              pad={
                isTabletOrMobile
                  ? { top: 'small' }
                  : { bottom: 'xxsmall', top: 'xlarge' }
              }
            >
              <Heading
                size="small"
                level={4}
                color="brand"
                style={{ lineHeight: '130%' }}
                pad="xlarge"
              >
                About client:
              </Heading>
            </Box>

            <Box width="380px" pad={{ bottom: 'medium' }}>
              <Text
                size="medium"
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
          <Box align="center">
            <Grid columns={{ count: columnsCounts, size: 'auto' }} gap="medium">
              <Box align="center">
                <img
                  style={{ height: 'auto', width: '100%' }}
                  src="../assets/PhoneGapNurse.png"
                  alt="The iphone that shows the application GapNurse"
                />
              </Box>
              {isTabletOrMobile || (
                <Box align="center">
                  <img
                    style={{ height: 'auto', width: '100%' }}
                    src="../assets/PhoneGapNurse2.png"
                    alt="The iphone that shows the application GapNurse"
                  />
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>
        <Box align="center" margin={{ top: '70px' }}>
          <Grid columns={['1/3', '1/3', '1/3']}>
            <Box width="250px" align="center">
              <Heading level={4} color="white">
                Technologies:
              </Heading>
              <Heading level={4} color="white" style={{ fontWeight: '700' }}>
                React, Vue
              </Heading>
            </Box>
            <Box width="250px" align="center">
              <Heading level={4} color="white">
                Languages:
              </Heading>
              <Heading level={4} color="white" style={{ fontWeight: '700' }}>
                JS
              </Heading>
            </Box>
            <Box width="250px" align="center">
              <Heading level={4} color="white">
                Time:
              </Heading>
              <Heading level={4} color="white" style={{ fontWeight: '700' }}>
                124 h
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box>
        <img
          style={{ width: '100%', height: 'auto' }}
          src="../assets/backgroundScreenshotsGapNurse.svg"
          alt="screenshots GapNurse"
        />
      </Box>
      <ButtonNextCase />
    </Box>
  );
};
