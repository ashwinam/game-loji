import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform | null) => void;
}

function PlatformSelector({ onSelectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onValueChange={(value) => {
        onSelectedPlatform(
          data.find((platform) => platform.name === value) || null
        );
      }}
    >
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

export default PlatformSelector;
