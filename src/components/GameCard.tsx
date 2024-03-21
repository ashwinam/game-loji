import { Game } from "@/hooks/useGames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
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
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {game.name}
          </h2>
        </CardTitle>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
