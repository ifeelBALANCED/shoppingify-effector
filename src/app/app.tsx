import { motion } from 'framer-motion';
import { useState } from 'react';

import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';

import ThemeToggleButton from '../shared/toggle-theme-button/theme-toggle-button';

import logo from './assets/svg/logo.svg';

const textFontSizes = [16, 18, 24, 30];

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Flex
        as="header"
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        fontSize="3xl"
      >
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          <Image src={logo} alt="" h="40vmin" />
        </motion.div>
      </Flex>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default App;
