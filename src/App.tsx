import React, {useState} from 'react';
import './App.css';
import {Box, ChakraProvider, ColorModeScript, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar";
import theme from "./theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;

}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area="nav">
                    <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList selectGenre={gameQuery.genre} onSelectGenre={(genre => {
                            setGameQuery({...gameQuery, genre});
                        })}/>
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery}/>
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={
                        (platform) => setGameQuery({...gameQuery, platform})}/>
                        </Box>
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery(({...gameQuery, sortOrder}))}/>
                    </Flex>
                    </Box>
                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}

export default App;
