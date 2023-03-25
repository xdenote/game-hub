import React from 'react';
import './App.css';
import {ChakraProvider, ColorModeScript, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar";
import theme from "./theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area="nav">
                    <NavBar/>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside">
                        <GenreList/>
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <GameGrid/>
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
