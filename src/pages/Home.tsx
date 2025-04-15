
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Code, Github, Terminal } from "lucide-react";
import { categories } from "@/lib/problems";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Master Data Structures &
              <span className="text-primary"> Algorithms</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Improve your coding skills by solving algorithm challenges. Practice, learn, and prepare for technical interviews.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/problems">Start Practice</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md p-1 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary">
            <div className="bg-card rounded-lg p-6 border border-border relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">solve.js</div>
              </div>
              <pre className="text-sm text-code-text font-mono overflow-x-auto">
                <code>
                  <span className="text-code-keyword">function</span>{" "}
                  <span className="text-code-function">twoSum</span>(nums, target) {"{"}
                  {"\n"}  <span className="text-code-keyword">const</span> map = <span className="text-code-keyword">new</span> Map();
                  {"\n"}
                  {"\n"}  <span className="text-code-keyword">for</span> (<span className="text-code-keyword">let</span> i = 0; i {"<"} nums.length; i++) {"{"}
                  {"\n"}    <span className="text-code-keyword">const</span> complement = target - nums[i];
                  {"\n"}
                  {"\n"}    <span className="text-code-keyword">if</span> (map.has(complement)) {"{"}
                  {"\n"}      <span className="text-code-keyword">return</span> [map.get(complement), i];
                  {"\n"}    {"}"}
                  {"\n"}
                  {"\n"}    map.set(nums[i], i);
                  {"\n"}  {"}"}
                  {"\n"}
                  {"\n"}  <span className="text-code-keyword">return</span> [-1, -1];
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Why Practice Here?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AlgoArena provides a focused environment to sharpen your algorithmic problem-solving skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100+ Problems</h3>
              <p className="text-muted-foreground">
                A curated collection of algorithmic challenges across multiple difficulty levels.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground">
                Practice with your preferred programming language including JavaScript, Python, and more.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary/20 p-3 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Explanations</h3>
              <p className="text-muted-foreground">
                Detailed problem descriptions and solutions to help you learn the underlying concepts.
              </p>
            </div>
          </div>
        </div>
        
        {/* Categories Section */}
        <div className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Problem Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore problems across various algorithm and data structure categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category}
                to={`/problems?category=${category}`}
                className="bg-card hover:bg-card/60 border border-border rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-medium">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
