import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './app/app';
import theme from './app/theme/theme';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Router>
    </ChakraProvider>
  </StrictMode>
);
