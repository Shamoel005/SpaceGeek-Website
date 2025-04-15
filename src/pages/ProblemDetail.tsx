
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProblemById } from "@/lib/problems";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [problem, setProblem] = useState(id ? getProblemById(id) : null);
  
  // Handle invalid problem ID
  useEffect(() => {
    if (id) {
      const foundProblem = getProblemById(id);
      setProblem(foundProblem);
    }
  }, [id]);
  
  if (!problem) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Problem Not Found</h1>
        <p className="text-muted-foreground mb-6">The problem you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/problems">Back to Problem List</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto flex flex-col h-[calc(100vh-4rem)] py-4">
      <div className="flex items-center justify-between mb-4 px-4">
        <Button variant="ghost" size="sm" asChild className="gap-1">
          <Link to="/problems">
            <ChevronLeft className="h-4 w-4" />
            Back to Problems
          </Link>
        </Button>
      </div>
      
      <Separator className="mb-4" />
      
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 overflow-hidden rounded-lg border border-border"
      >
        <ResizablePanel defaultSize={40} minSize={30}>
          <ProblemDescription problem={problem} />
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={60} minSize={30}>
          <CodeEditor problem={problem} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ProblemDetail;
