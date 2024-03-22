import useData from "./useData";


interface Genres {
    id:number
    name: string
}

function useGenres () {
  return useData<Genres>("/genres")
}

export default useGenres;