import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SortSelector() {
  return (
    <Select>
      <SelectTrigger className="w-auto font-bold text-xl p-3">
        <SelectValue placeholder="Order By: Relevance" />
      </SelectTrigger>
      <SelectContent className="font-normal">
        <SelectItem className="text-lg" value="Relevance">
          Relevance
        </SelectItem>
        <SelectItem className="text-lg" value="Date Added">
          Date Added
        </SelectItem>
        <SelectItem className="text-lg" value="Name">
          Name
        </SelectItem>
        <SelectItem className="text-lg" value="Release Date">
          Release Date
        </SelectItem>
        <SelectItem className="text-lg" value="Popularity">
          Popularity
        </SelectItem>
        <SelectItem className="text-lg" value="Average Rating">
          Average Rating
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SortSelector;
