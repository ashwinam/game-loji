import { Game } from "@/hooks/useGames";
import { Card } from "@/components/ui/card";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";

export interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card className="overflow-hidden">
      <img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <div className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0  cursor-pointer px-6">
        {game.name}
      </div>
      <div className="flex items-center justify-between p-6 pt-1">
        <div className="flex gap-3 mt-2">
          <PlatformIconsList game={game} />
        </div>
        <div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </Card>
  );
}

export default GameCard;
