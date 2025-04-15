
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, RotateCcw } from "lucide-react";
import { executeCode } from "@/lib/execution";
import { Problem } from "@/lib/problems";

interface CodeEditorProps {
  problem: Problem;
}

const CodeEditor = ({ problem }: CodeEditorProps) => {
  const [language, setLanguage] = useState<"javascript" | "python">("javascript");
  const [code, setCode] = useState(problem.starterCode[language]);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [executionStatus, setExecutionStatus] = useState<"success" | "error" | null>(null);
  
  const handleLanguageChange = (value: string) => {
    if (value === "javascript" || value === "python") {
      setLanguage(value);
      setCode(problem.starterCode[value]);
      setOutput("");
      setExecutionStatus(null);
    }
  };
  
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };
  
  const resetCode = () => {
    setCode(problem.starterCode[language]);
    setOutput("");
    setExecutionStatus(null);
  };
  
  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    try {
      const result = await executeCode(code, language, problem.id);
      setOutput(result.output + (result.executionTime ? `\nExecution time: ${result.executionTime}ms` : ""));
      setExecutionStatus(result.status);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : "Something went wrong"}`);
      setExecutionStatus("error");
    } finally {
      setIsRunning(false);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <Tabs defaultValue={language} onValueChange={handleLanguageChange} className="w-full">
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex space-x-2 ml-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetCode}
            title="Reset Code"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            onClick={runCode} 
            disabled={isRunning}
            className="flex items-center"
          >
            <PlayCircle className="mr-1 h-4 w-4" />
            Run
          </Button>
        </div>
      </div>
      
      <div className="flex-1 grid grid-rows-2 gap-4">
        <div className="code-editor-wrapper">
          <textarea
            className="code-editor"
            value={code}
            onChange={handleCodeChange}
            spellCheck={false}
            placeholder="Write your code here..."
          />
        </div>
        
        <div className="code-editor-wrapper bg-secondary">
          <div className="p-2 text-xs border-b border-border">Console Output</div>
          <pre className={`p-4 h-full overflow-auto font-mono text-sm ${
            executionStatus === "success" ? "text-green-400" : 
            executionStatus === "error" ? "text-red-400" : ""
          }`}>
            {output || "Run your code to see output here"}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
