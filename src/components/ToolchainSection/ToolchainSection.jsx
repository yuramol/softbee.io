import React from 'react';
import { Box, Grid, Image, ResponsiveContext } from 'grommet';
import PropTypes from 'prop-types';


import { Heading } from '../../legos/typography/Heading';
import { maxBreakpoints } from '../../utils/useBreakpoints';


const toolchainItems = [
  { id: '1', label: 'React', icon: '/assets/icons/reactIcon.svg' },
  { id: '2', label: 'Vue', icon: '/assets/icons/vueIcon.svg' },
  {
    id: '3',
    label: 'React Native',
    icon: '/assets/icons/reactNativeIcon.svg',
  },
  { id: '4', label: 'Angular', icon: '/assets/icons/angularIcon.svg' },
  { id: '5', label: 'Flutter', icon: '/assets/icons/flutterIcon.svg' },
  { id: '6', label: 'Node.js', icon: '/assets/icons/nodeJSIcon.svg' },
  { id: '7', label: 'Ionic', icon: '/assets/icons/ionicIcon.svg' },
];

export const ToolchainSection = ({ toolchain }) => {
  const size = React.useContext(ResponsiveContext);
  const isMobile = maxBreakpoints('xSmall', size);
  const headerLevel = isMobile ? 6 : 5;
  const paddingVariant = isMobile
    ? { horizontal: 'large', vertical: 'large' }
    : 'xlarge';

  return (
    <Box>
      <Grid rows={{ count: 2, size: ['auto', 'flex'] }} pad={paddingVariant}>
        <Box align="center">
          <Heading
            textAlign="center"
            level={isMobile ? 3 : 2}
            color="brand"
            margin={{ bottom: 'xlarge' }}
          >
            What do we have in our toolchain?
          </Heading>
        </Box>
        <Box direction="row" justify="center" wrap>
          {toolchain.map(({ id, logo, name }) => (
            <Box
              key={id}
              height="250px"
              width="150px"
              pad={{ horizontal: 'medium' }}
            >
              <Box height="90px" alignSelf="center">
                <Image fill responsive={false} src={logo} alt={name} />
              </Box>

              <Heading
                level={headerLevel}
                alignSelf="center"
                color="brand"
                textAlign="center"
              >
                {name}
              </Heading>
            </Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

ToolchainSection.propTypes = {
  toolchain: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
