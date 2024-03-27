import useGenres, { Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import Spinner from "./ui/Spinner";
import { Button } from "./ui/button";

interface Props {
  onSelectedGenre: (genre: Genres | null) => void;
  selectedGenre: Genres | null;
}

function GenresList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres();

  return (
    <div className="list">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Genres
      </h2>
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
            className={`${
              genre.id === selectedGenre?.id ? "font-bold" : "font-normal"
            } text-lg px-0 whitespace-normal text-left`}
          >
            {genre.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default GenresList;
