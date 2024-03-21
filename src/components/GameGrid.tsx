import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
        {/*<li key={data.id}>{data.name}</li> */}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
