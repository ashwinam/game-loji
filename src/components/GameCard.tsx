import { Game } from "@/hooks/useGames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlatformIconsList from "./PlatformIconsList";

export interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <CardHeader>
        <img src={game.background_image} alt={game.name} />
      </CardHeader>
      <CardFooter>
        <CardTitle>
          <div className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {game.name}
          </div>
          <div className="flex gap-3 mt-2">
            <PlatformIconsList game={game} />
          </div>
        </CardTitle>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
