import React from 'react';

import { Box, Grid, ResponsiveContext } from 'grommet';
import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { ButtonNextCase } from '../ButtonNextCase/ButtonNextCase';
import { maxBreakpoints } from '../../utils/useBreakpoints';
import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { GridInfo } from './styled';

export const CaseGapNurse = () => {
  const size = React.useContext(ResponsiveContext);
  const isTabletOrMobile = maxBreakpoints('tabletOrMobile', size);
  const columnsCountTablet = isTabletOrMobile ? 1 : 2;
  const isMobile = maxBreakpoints('small', size);
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box
        height={isMobile ? 'auto' : '835px'}
        background={
          isMobile
            ? undefined
            : {
                position: 'bottom',
                size: 'cover',
                image: 'url(/assets/backgroundCaseGapnurse.svg)',
              }
        }
      >
        <Container>
          <Box width="100%" align="center">
            <Heading level={2} color="brand">
              Mobile app
            </Heading>
          </Box>
          <Grid
            columns={['auto', 'auto']}
            pad={{ horizontal: 'xlarge' }}
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
                      lineHeight="130%"
                      fontSize="24px"
                      margin={{ vertical: '10px' }}
                    >
                      About client:
                    </Heading>
                  </Box>

                  <Box width="380px">
                    <Text size="medium" color="text-dark-grey">
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
                  <ImgFluid
                    src="/assets/PhoneGapNurse.png"
                    alt="The iphone that shows the application GapNurse"
                  />
                </Box>
                {isTabletOrMobile || (
                  <Box align="center">
                    <ImgFluid
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
              <Box>
                <Heading level={6} color="brand" margin={{ vertical: '10px' }}>
                  About client:
                </Heading>
              </Box>
              <Box width="100%">
                <Text color="text-dark-grey">
                  With GapNurse, facilities know they’re covered during critical
                  moments and unexpected absences without breaking your budget.
                </Text>
              </Box>
            </Box>
          )}
        </Container>
        <Box
          width="100%"
          height={isMobile ? '130px' : '150px'}
          align="center"
          justify="center"
          margin={isMobile ? { top: '30px' } : { top: '70px' }}
          background={{ color: '#5e5999' }}
        >
          <GridInfo
            columns={['1/3', '1/3', '1/3']}
            isMobile={isMobile}
            pad="small"
          >
            <Box
              width={isMobile ? 'auto' : '250px'}
              justify={isMobile ? 'center' : undefined}
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
                fontWeight="700"
                lineHeight="16px"
                margin={{ vertical: 'small' }}
              >
                React, Vue
              </Heading>
            </Box>
            <Box
              width={isMobile ? 'auto' : '250px'}
              justify={isMobile ? 'center' : undefined}
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
                fontWeight="700"
                lineHeight="16px"
                margin={{ vertical: 'small' }}
              >
                JS
              </Heading>
            </Box>
            <Box
              width={isMobile ? 'auto' : '250px'}
              justify={isMobile ? 'center' : undefined}
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
                fontWeight="700"
                lineHeight="16px"
                margin={{ vertical: 'small' }}
              >
                124 h
              </Heading>
            </Box>
          </GridInfo>
        </Box>
      </Box>
      <Box>
        <ImgFluid
          src="/assets/backgroundScreenshotsGapNurse.jpg"
          alt="screenshots GapNurse"
        />
      </Box>
      <ButtonNextCase url="/mmo-case" />
    </Box>
  );
};
