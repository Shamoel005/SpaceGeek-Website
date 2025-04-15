
import { Problem } from "@/lib/problems";

interface ProblemDescriptionProps {
  problem: Problem;
}

const ProblemDescription = ({ problem }: ProblemDescriptionProps) => {
  const difficultyClasses = {
    easy: "difficulty-badge-easy",
    medium: "difficulty-badge-medium",
    hard: "difficulty-badge-hard",
  };

  return (
    <div className="space-y-6 p-4 overflow-auto">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <div className="flex items-center space-x-3">
          <span className={difficultyClasses[problem.difficulty]}>
            {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
          </span>
          <span className="text-xs text-muted-foreground">{problem.category}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line">{problem.description}</div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-secondary rounded-md p-3 space-y-2">
              <div>
                <span className="text-muted-foreground font-medium">Input:</span> 
                <code className="ml-2 text-code-string bg-secondary">{example.input}</code>
              </div>
              <div>
                <span className="text-muted-foreground font-medium">Output:</span> 
                <code className="ml-2 text-code-function bg-secondary">{example.output}</code>
              </div>
              {example.explanation && (
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Explanation:</span> {example.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Constraints:</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
