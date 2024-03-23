import useGenres, { Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import Spinner from "./ui/Spinner";
import { Button } from "./ui/button";

interface Props {
  onSelectedGenre: (genre: Genres | null) => void;
}

function GenresList({ onSelectedGenre }: Props) {
  const { data, isLoading } = useGenres();

  return (
    <div className="list">
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <div className="flex gap-3 items-center my-3" key={genre.id}>
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="h-[50px] w-[50px] object-cover rounded-lg"
          />
          <Button
            onClick={() => onSelectedGenre(genre)}
            variant="link"
            className="font-semibold text-lg px-0"
          >
            {genre.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default GenresList;
