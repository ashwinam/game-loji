
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

const useGames = (onSelectedGenre: Genres | null) => {
  return useData<Game>("/games", {params : {genres : onSelectedGenre?.id}}, [onSelectedGenre?.id])
}

export default useGames;