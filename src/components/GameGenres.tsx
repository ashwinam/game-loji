import useGenres from "@/hooks/useGenres";

function GameGenres() {
  const { genres } = useGenres();

  return genres.map((genre) => <li>{genre.name}</li>);
}

export default GameGenres;
