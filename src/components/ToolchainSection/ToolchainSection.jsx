import React from 'react';
import { Box, Grid, Image } from 'grommet';
import { Heading } from '../../legos/typography/Heading';
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
  <Box height="500px">
    <Grid
      fill
      columns={['flex']}
      rows={['45%', '65%']}
      areas={[
        { name: 'heading', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [0, 1], end: [1, 1] },
      ]}
      pad="xsmall"
    >
      <Box gridArea="heading" align="center" justify="center">
        <Heading level={2} color="brand">
          What do we have in our toolchain?
        </Heading>
      </Box>
      <Box gridArea="main" margin={{ left: '120px', right: '120px' }}>
        <Grid
          columns={{ count: 7, size: 'auto' }}
          fill="horizontal"
          justify="center"
          align="center"
        >
          {toolchainItems.map(toolchainItem => (
            <Box key={toolchainItem.id} height="250px">
              <Box height="130px" alignSelf="center">
                <Image src={toolchainItem.icon} alt={toolchainItem.label} />
              </Box>

              <Text alignSelf="center" size="xxlarge" color="brand">
                {toolchainItem.label}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Grid>
  </Box>
);
