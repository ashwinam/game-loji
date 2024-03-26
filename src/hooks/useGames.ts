
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

const useGames = (onSelectedGenre: Genres | null, onSelectedPlatform: Platform|null) => {
  return useData<Game>("/games", {params : {genres : onSelectedGenre?.id, platforms : onSelectedPlatform?.id}}, [onSelectedGenre?.id, onSelectedPlatform?.id])
}

export default useGames;