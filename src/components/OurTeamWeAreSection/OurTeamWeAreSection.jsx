import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { Text } from '../../legos/typography/Text';
import { ButtonLetsTalk } from '../ButtonLetsTalk/ButtonLetsTalk';
import { maxBreakpoints } from '../../utils/useBreakpoints';

export const OurTeamWeAreSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = maxBreakpoints('small', size) ? 1 : 2;
  const isMobile = maxBreakpoints('bMobile', size);
  const isTablet = maxBreakpoints('tabletOrMobile', size);

  return (
    <Box
      height="auto"
      pad={isTablet ? { horizontal: 'medium' } : { horizontal: 'xlarge' }}
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad={{ horizontal: 'small', vertical: 'xlarge' }}
        gap="medium"
        style={{ height: 'auto' }}
      >
        <Box pad={{ horizontal: 'large' }}>
          <img
            style={{ height: 'auto', width: '100%' }}
            src="/assets/sectionHeader.svg"
            alt="People are creating a website"
          />
        </Box>
        <Box
          width="100%"
          height="auto"
          align="center"
          justify="center"
          pad={
            isTablet
              ? { horizontal: 'small', vertical: 'large' }
              : { left: 'xlarge', right: 'large' }
          }
        >
          <Text
            color="brand"
            size={isMobile ? 'small' : 'medium'}
            align="center"
          >
            We’re designers, developers, illustrators, copywriters and coders,
            but we also have pure gold ideas. iPhone games, time-keeping apps,
            dog-backpacks, too many tshirt slogans to keep track of. One day
            we’ll be rich, you’d best work with us while we need the money.
          </Text>
          <Box
            justify="center"
            align="center"
            height="50px"
            width="194px"
            margin={{ top: '50px' }}
          >
            <ButtonLetsTalk
              label="Let’s talk4   &#128075;"
              color="accent-1"
              primary
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
