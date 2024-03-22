import { Badge } from "@/components/ui/badge";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color =
    score > 75
      ? "text-green-700 bg-green-300"
      : score > 60
      ? "text-yellow-700 bg-yellow-300"
      : "";

  return (
    <Badge variant="default" className={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
