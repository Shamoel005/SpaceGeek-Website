
import { cn } from "@/lib/utils";
import { Difficulty } from "@/lib/problems";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  showLabel?: boolean;
  className?: string;
}

const DifficultyBadge = ({ 
  difficulty, 
  showLabel = true, 
  className 
}: DifficultyBadgeProps) => {
  const colors = {
    easy: "bg-green-500/20 text-easy border-easy",
    medium: "bg-orange-500/20 text-medium border-medium",
    hard: "bg-red-500/20 text-hard border-hard",
  };

  const dotColors = {
    easy: "bg-easy",
    medium: "bg-medium",
    hard: "bg-hard",
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium",
        colors[difficulty],
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", dotColors[difficulty])} />
      {showLabel && (
        <span>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      )}
    </div>
  );
};

export default DifficultyBadge;
