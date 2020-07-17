import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Grid, ResponsiveContext } from 'grommet';

import { theme } from '../../utils/theme';
import { Heading } from '../../legos/typography/Heading';
import { RouterLink } from '../../legos/RouterLink';

export const OurTeamFollowSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 1;
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const boxShadow = isMobile ? '10px 10px 2px 1px' : '25px 25px 2px 1px';
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'xlarge' }
    : 'xlarge';

  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad={paddingVariant}
      gap="medium"
      background={{ color: '#fff' }}
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad={
          !isMobile
            ? { vertical: 'large', horizontal: 'xlarge' }
            : { vertical: 'xlarge' }
        }
        margin={isMobile ? 'medium' : undefined}
        justify="center"
        width="1000px"
        style={{
          background: theme.global.colors.brand,
          boxShadow,
          color: '#FAE79F',
          borderRadius: '20px',
        }}
        round
        gap="small"
      >
        <Heading
          color="text-white"
          level={isMobile ? 5 : 2}
          style={
            isMobile
              ? { textAlign: 'center', lineHeight: '130%' }
              : { textAlign: 'center' }
          }
          pad={{ vertical: 'xlarge' }}
        >
          Follow us on{' '}
          <RouterLink
            to="our-Medium"
            color="white"
            style={{ textDecorationLine: 'underline' }}
          >
            Medium
          </RouterLink>{' '}
          and don’t forget to{' '}
          <RouterLink
            to=" Hire the team"
            color="white"
            style={{ textDecorationLine: 'underline' }}
          >
            Hire the team
          </RouterLink>
        </Heading>
      </Grid>
    </Box>
  );
};
