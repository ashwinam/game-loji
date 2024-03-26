import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";

function PlatformList() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Select>
      <SelectTrigger className="w-[180px] font-bold text-xl p-3">
        <SelectValue placeholder="Platform" />
      </SelectTrigger>
      <SelectContent className="font-normal">
        {data.map((platform) => (
          <SelectItem
            key={platform.id}
            value={platform.name}
            className="text-lg"
          >
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default PlatformList;
