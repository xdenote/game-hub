import useData from "./useData";
import {GameQuery} from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } [];
    metacritic: number;
}
const UseGames = (
    gameQuery: GameQuery) => {
    return useData<Game>('/games', {
        params:
            {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder
            }},
       [gameQuery] );
}
export default UseGames;