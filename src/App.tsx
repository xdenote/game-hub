import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <Button colorScheme='blue'>Button</Button>
      </ChakraProvider>
  );
}

export default App;
