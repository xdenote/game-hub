import React from 'react';
import './App.css';
import {ChakraProvider, Grid, GridItem, Show} from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area="nav" bg="lightcoral">Nav</GridItem>
                <Show above="lg">
                    <GridItem area="aside" bg="gold">Aside</GridItem>
                </Show>
                <GridItem area="main" bg="dodgerblue">Main</GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
