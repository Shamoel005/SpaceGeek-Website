
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Home, MoreHorizontal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="text-xl font-bold flex items-center"
          >
            <Code className="mr-2 h-6 w-6 text-primary" />
            <span>AlgoArena</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <Home className="mr-1 h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/problems" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <BookOpen className="mr-1 h-4 w-4" />
            Problems
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
