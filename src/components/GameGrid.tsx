import useGames, { Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genres } from "@/hooks/useGenres";

const skeletons = [1, 2, 3, 4, 5, 6];

interface Props {
  onSelectedGenre: Genres | null;
  onSelectedPlatform: Platform | null;
  onSortSelected: string;
  onSearchField: string;
}

function GameGrid({
  onSelectedGenre,
  onSelectedPlatform,
  onSortSelected,
  onSearchField,
}: Props) {
  const { data, error, isLoading } = useGames(
    onSelectedGenre,
    onSelectedPlatform,
    onSortSelected,
    onSearchField
  );

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
