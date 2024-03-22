import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6];

function GameGrid() {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
