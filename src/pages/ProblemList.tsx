
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  getProblems, 
  getProblemsByDifficulty, 
  getProblemsByCategory,
  categories, 
  Difficulty 
} from "@/lib/problems";
import DifficultyBadge from "@/components/DifficultyBadge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckSquare, Search } from "lucide-react";

const ProblemList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "all">(
    (queryParams.get("difficulty") as Difficulty) || "all"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    queryParams.get("category") || "all"
  );
  
  const [filteredProblems, setFilteredProblems] = useState(getProblems());
  
  // Update filters based on URL parameters and search
  useEffect(() => {
    let problems = getProblems();
    
    // Apply difficulty filter
    if (selectedDifficulty !== "all") {
      problems = getProblemsByDifficulty(selectedDifficulty);
    }
    
    // Apply category filter
    if (selectedCategory !== "all") {
      problems = getProblemsByCategory(selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      problems = problems.filter(problem => 
        problem.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProblems(problems);
    
    // Update URL with filters
    const params = new URLSearchParams();
    if (selectedDifficulty !== "all") params.set("difficulty", selectedDifficulty);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    
    const newSearch = params.toString();
    if (location.search !== `?${newSearch}`) {
      navigate({ search: newSearch ? `?${newSearch}` : "" }, { replace: true });
    }
  }, [selectedDifficulty, selectedCategory, searchQuery, location.search, navigate]);
  
  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value as Difficulty | "all");
  };
  
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const clearFilters = () => {
    setSelectedDifficulty("all");
    setSelectedCategory("all");
    setSearchQuery("");
    navigate("/problems");
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold">Algorithm Problems</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search problems..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9"
            />
          </div>
          
          <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
            <SelectTrigger className="w-full sm:w-36">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {(selectedDifficulty !== "all" || selectedCategory !== "all" || searchQuery) && (
            <Button variant="outline" onClick={clearFilters} className="w-full sm:w-auto">
              Clear Filters
            </Button>
          )}
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProblems.length > 0 ? (
                filteredProblems.map((problem) => (
                  <tr 
                    key={problem.id} 
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-muted-foreground">
                        {/* In a real app, this would show completion status */}
                        <CheckSquare className="h-5 w-5 text-muted-foreground/30" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        to={`/problems/${problem.id}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {problem.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <DifficultyBadge difficulty={problem.difficulty} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {problem.category}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-muted-foreground">
                    No problems found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProblemList;
