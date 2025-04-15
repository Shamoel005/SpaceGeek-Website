
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Newspaper, Globe, Star, Menu, X, MoonStar } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Link 
            to="/" 
            className="text-xl font-bold flex items-center"
          >
            <Rocket className="mr-2 h-6 w-6 text-primary" />
            <span>CosmosExplorer</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <MoonStar className="mr-1 h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/news" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <Newspaper className="mr-1 h-4 w-4" />
            News
          </Link>
          <Link 
            to="/planets" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <Globe className="mr-1 h-4 w-4" />
            Planets
          </Link>
          <Link 
            to="/discoveries" 
            className="flex items-center text-sm font-medium hover:text-primary"
          >
            <Star className="mr-1 h-4 w-4" />
            Discoveries
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-card border-t border-border">
          <div className="container mx-auto space-y-4">
            <Link 
              to="/" 
              className="flex items-center text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              <MoonStar className="mr-2 h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/news" 
              className="flex items-center text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              <Newspaper className="mr-2 h-4 w-4" />
              News
            </Link>
            <Link 
              to="/planets" 
              className="flex items-center text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              <Globe className="mr-2 h-4 w-4" />
              Planets
            </Link>
            <Link 
              to="/discoveries" 
              className="flex items-center text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              <Star className="mr-2 h-4 w-4" />
              Discoveries
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
