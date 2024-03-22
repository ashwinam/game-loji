import useGenres from "@/hooks/useGenres";

function GameGenres() {
  const { data } = useGenres();

  return data.map((genre) => <li>{genre.name}</li>);
}

export default GameGenres;
