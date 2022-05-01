import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from "./theme/theme"
import App from './components/App';

const rootElement = document.getElementById("root")

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
)