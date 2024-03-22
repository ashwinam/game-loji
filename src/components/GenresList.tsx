import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";

function GenresList() {
  const { data } = useGenres();

  return (
    <div className="list">
      {data.map((genre) => (
        <div className="flex gap-3 items-center my-3">
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
