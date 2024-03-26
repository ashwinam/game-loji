
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
    id:number
    name: string
    slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number;
}

const useGames = (onSelectedGenre: Genres | null, onSelectedPlatform: Platform|null, onSortSelected: string) => {
  return useData<Game>("/games", {params : {genres : onSelectedGenre?.id, platforms : onSelectedPlatform?.id, ordering: onSortSelected}}, [onSelectedGenre?.id, onSelectedPlatform?.id, onSortSelected])
}

export default useGames;