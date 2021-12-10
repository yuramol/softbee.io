import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { Text } from '../../legos/typography/Text';
import { Heading } from '../../legos/typography/Heading';
import { ButtonNextCase } from '../ButtonNextCase/ButtonNextCase';
import { maxBreakpoints } from '../../utils/useBreakpoints';

import Container from '../Layout/Container';
import { ImgFluid } from '../Layout/ImgFluid';
import { GridInfo } from './styled';

export const CaseMMO = () => {
  const size = React.useContext(ResponsiveContext);
  const isTablet = maxBreakpoints('sTablet', size);
  const isMobile = maxBreakpoints('small', size);
  const textAlignVariant = isMobile ? 'center' : 'start';
  return (
    <Box>
      <Box>
        <Container>
          <Box width="100%" align="center">
            <Heading level={isMobile ? 4 : 2} color="brand" textAlign="center">
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
            align={textAlignVariant}
          >
            <Box
              align={textAlignVariant}
              pad={
                isTablet ? { top: 'large' } : { left: 'large', top: 'large' }
              }
            >
              <Box background={{ color: '#241f43' }} pad="small">
                <img src="/assets/logoMMO.png" alt="Logo of MMO.CAT project" />
              </Box>
              {isMobile || (
                <Box>
                  <Box pad={{ bottom: 'xxsmall', top: 'xlarge' }}>
                    <Heading
                      level={5}
                      color="brand"
                      lineHeight="130%"
                      margin={{ vertical: 'xsmall' }}
                    >
                      About client:
                    </Heading>
                  </Box>

                  <Box
                    width={isTablet ? '320px' : '370px'}
                    pad={{ right: 'large' }}
                  >
                    <Text size="medium" color="text-dark-grey">
                      We provided full-stack development service for end-to-end
                      websites of MMO.cat team
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              align="center"
              justify="center"
              pad={isMobile ? { horizontal: 'large' } : undefined}
            >
              <ImgFluid
                src="/assets/sectionMMO.png"
                alt="Screenshot of MMO website page "
              />
            </Box>
          </Grid>
          {isMobile && (
            <Box align="start" pad={{ horizontal: 'xlarge' }}>
              <Box>
                <Heading
                  level={6}
                  color="brand"
                  lineHeight="130%"
                  margin={{ vertical: 'xsmall' }}
                >
                  About client:
                </Heading>
              </Box>
              <Box width="100%">
                <Text color="text-dark-grey">
                  We provided full-stack development service for end-to-end
                  websites of MMO.cat team
                </Text>
              </Box>
            </Box>
          )}
        </Container>
        <Box
          width="100%"
          height={isMobile ? '130px' : '210px'}
          align="center"
          justify="center"
          margin={isMobile ? { top: '30px' } : undefined}
          background={{ color: '#ff1b60' }}
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
          src="/assets/backgroundCaseMMO.png"
          alt="Screenshots of MMO.CAT website"
        />
      </Box>
      <ButtonNextCase url="/gapnurse-case" />
    </Box>
  );
};
