import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onSortSelected: (sortOrder: string) => void;
}

function SortSelector({ onSortSelected }: Props) {
  return (
    <Select
      onValueChange={(value) =>
        onSortSelected(value === "relevance" ? "" : value)
      }
    >
      <SelectTrigger className="w-auto font-bold text-xl p-3">
        <SelectValue placeholder="Order By: Relevance" />
      </SelectTrigger>
      <SelectContent className="font-normal">
        <SelectItem className="text-lg" value="relevance">
          Relevance
        </SelectItem>
        <SelectItem className="text-lg" value="-added">
          Date Added
        </SelectItem>
        <SelectItem className="text-lg" value="name">
          Name
        </SelectItem>
        <SelectItem className="text-lg" value="-released">
          Release Date
        </SelectItem>
        <SelectItem className="text-lg" value="metacritic">
          Popularity
        </SelectItem>
        <SelectItem className="text-lg" value="rating">
          Average Rating
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortSelector;
