import React from 'react';
import { Box, Grid } from 'grommet';

import { Heading } from '../../legos/typography/Heading';
import { theme } from '../../utils/theme';
import { Text } from '../../legos/typography/Text';

const toolchainItems = [
  { id: '1', label: 'React', icon: './assets/icons/reactIcon.svg' },
  { id: '2', label: 'Vue', icon: './assets/icons/vueIcon.svg' },
  {
    id: '3',
    label: 'React Native',
    icon: './assets/icons/reactNativeIcon.svg',
  },
  { id: '4', label: 'Angular', icon: './assets/icons/angularIcon.svg' },
  { id: '5', label: 'Flutter', icon: './assets/icons/flutterIcon.svg' },
  { id: '6', label: 'Node.js', icon: './assets/icons/nodeJSIcon.svg' },
  { id: '7', label: 'Ionic', icon: './assets/icons/ionicIcon.svg' },
];

export const ToolchainSection = () => (
  <Box direction="row" wrap="true" justify="center" align="center">
    {toolchainItems.map(props => (
      <Box key={props.id} pad="medium">
        <Box>
          <img src={props.icon} alt={props.label} />
        </Box>
        <Text alignSelf="center" size="medium" color={theme.global.colors}>
          {props.label}
        </Text>
      </Box>
    ))}
  </Box>
);
