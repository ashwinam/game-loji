import { Platform } from "@/hooks/useGames";
import { Genres } from "@/hooks/useGenres";

interface Props {
  platform: Platform | null;
  genre: Genres | null;
}

function GameHeading({ platform, genre }: Props) {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
      {heading}
    </h1>
  );
}

export default GameHeading;
