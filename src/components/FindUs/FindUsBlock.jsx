import React from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import { Paragraph } from '../../legos/typography/Paragraph';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { SocialLink } from '../Footer/styled';
import {
  IconLinkedin,
  IconUpWork,
  IconClutch,
  IconBehance,
} from '../../legos/Icons';
import { theme } from '../../utils/theme';
import { Heading } from '../../legos/typography/Heading';

export const FindUsBlock = ({ bgColor, headerText }) => {
  const { isSmall, isDesktopOrTablet, isSTablet } = useBreakpoint();
  const iconSize = isSmall ? '32px' : '42px';
  const dataInfo = [
    {
      name: 'Upwork',
      iconSrc: <IconUpWork />,
      to: 'https://www.upwork.com/ag/softbee/',
    },
    {
      name: 'LinkedIn',
      iconSrc: <IconLinkedin />,
      to: 'https://www.linkedin.com/company/softbeeio/',
    },
    {
      name: 'Clutch',
      iconSrc: <IconClutch />,
      to: 'https://www.upwork.com/ag/softbee/',
    },
    {
      name: 'Behance',
      iconSrc: <IconBehance />,
      to: 'https://www.upwork.com/ag/softbee/',
    },
  ];
  return (
    <Box
      pad={{ top: 'medium' }}
      align={isSmall ? undefined : 'center'}
      justify="center"
      background={bgColor}
      round={{ corner: 'bottom', size: isSmall ? '0px' : '100px' }}
    >
      <Heading
        margin={{ bottom: '15px', top: '0' }}
        level={2}
        textAlign="center"
        color="#fff"
      >
        {headerText}
      </Heading>

      <Box
        justify="center"
        margin={{ horizontal: 'auto' }}
        align="center"
        direction="row"
        wrap={!!isSmall}
      >
        {dataInfo.map(({ name, iconSrc, to }) => {
          return (
            <Box
              pad={{
                horizontal: isDesktopOrTablet ? 'medium' : 'large',
                bottom: 'large',
                top: 'medium',
              }}
              justify={isSmall ? 'center' : undefined}
              align="center"
              direction="row"
              key={name}
            >
              <Box
                margin={{ right: 'medium' }}
                flex={{ shrink: 0 }}
                height={iconSize}
                width={iconSize}
              >
                <SocialLink
                  color="#fff"
                  activeColor={theme.global.colors['accent-1']}
                  icon={iconSrc}
                  to={to}
                  target="_blank"
                />
              </Box>
              <Box>
                <Paragraph
                  textAlign="center"
                  color="#fff"
                  fontWeight="400"
                  margin={{ bottom: 'none', top: 'none' }}
                  size={isSTablet ? 'medium' : 'xxlarge'}
                >
                  {name}
                </Paragraph>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
FindUsBlock.propTypes = {
  bgColor: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};
