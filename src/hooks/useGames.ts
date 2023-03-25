import useData from "./useData";
import {Genre} from "./useGenres";

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
const UseGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    return useData<Game>('/games', {
        params:
            {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id}},
       [
           selectedGenre?.id,
           selectedPlatform?.id] );
}
export default UseGames;