import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import Spinner from "./ui/Spinner";

function GenresList() {
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
          <div className="font-semibold text-lg">{genre.name}</div>
        </div>
      ))}
    </div>
  );
}

export default GenresList;
