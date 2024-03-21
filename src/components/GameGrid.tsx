import useGames from "@/hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {games.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
