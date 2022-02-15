import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';

import Container from '../Layout/Container';
import { Button } from '../../legos/Button/Button';
import { CardTeam, CardTeamImageWrapper, CardTeamFooter } from './styled';
import { Heading } from '../../legos/typography/Heading';
import { IconArrowDown } from '../../legos/Icons';
import { ImgCover } from '../Layout/ImgCover';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { theme } from '../../utils/theme';

export const OurTeamAboutTeam = ({ title, text, list }) => {
  const [teamPage, setTeamPage] = useState(1);
  const maxPages = Math.ceil(list.length / 6);
  const loadMoreMembers = () => setTeamPage(teamPage + 1);

  const { isSmall, isSTablet, isTablet, isExtraSmall } = useBreakpoint();

  const textFontSizeVariant = isSTablet ? 'medium' : 'xlarge';
  const gapVariant = isTablet ? 'medium' : 'xlarge';

  return (
    <Box
      pad={{ vertical: isSmall ? 'xlarge' : 'large' }}
      background={{ color: '#fff' }}
    >
      <Container>
        <Heading
          level={2}
          textAlign="center"
          margin={{ top: 'none', bottom: 'large' }}
        >
          {title}
        </Heading>
        <Paragraph
          margin={{ top: 'none', bottom: 'none' }}
          size={textFontSizeVariant}
          color="brand"
          textAlign="center"
        >
          {text}
        </Paragraph>

        <Grid
          columns={{ count: isSmall ? 2 : 3, size: ['auto', '300px'] }}
          pad={{ top: 'large' }}
          gap={{ column: 'medium', row: gapVariant }}
          justifyContent={isSmall ? 'center' : 'between'}
        >
          {list
            .filter((_, idx) => idx < teamPage * 6)
            .map(({ name, position, photo }) => (
              <CardTeam isMobileSmall={isExtraSmall} key={name}>
                <CardTeamImageWrapper bottomFlex="100%">
                  <ImgCover src={photo} />
                </CardTeamImageWrapper>
                <CardTeamFooter
                  pad={{ vertical: 'medium', horizontal: 'medium' }}
                  justify="end"
                  alignSelf="end"
                >
                  <Heading
                    level={4}
                    size={isExtraSmall ? '1rem' : undefined}
                    color="#fff"
                    lineHeight="1"
                    margin={{ top: 'none', bottom: 'xsmall' }}
                  >
                    {name}
                  </Heading>
                  <Paragraph
                    margin={{ top: 'none', bottom: 'none' }}
                    color="#fff"
                    size={isExtraSmall ? '0.85rem' : undefined}
                    lineHeight="1"
                    fontWeight="300"
                  >
                    {position}
                  </Paragraph>
                </CardTeamFooter>
              </CardTeam>
            ))}
        </Grid>
        {teamPage < maxPages && (
          <Box justify="center" pad={{ top: 'large' }}>
            <Button
              onClick={loadMoreMembers}
              hoveredIconBtn={theme.global.colors['accent-1']}
              plain
              icon={<IconArrowDown />}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

OurTeamAboutTeam.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      photo: PropTypes.string,
    }),
  ).isRequired,
};
