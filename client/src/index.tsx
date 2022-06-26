import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '_styles/chakra/theme';
import { BrowserRouter } from 'react-router-dom';

import { Friends } from '@discord-clone/types';

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('root')
);
