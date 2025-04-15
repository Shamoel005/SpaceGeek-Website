
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Newspaper, Globe, Star } from "lucide-react";
import { newsArticles } from "@/lib/space-data";

const Home = () => {
  // Get the most recent news articles
  const recentNews = [...newsArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="container relative px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Explore the <span className="text-primary">Cosmos</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Discover the latest in space news, explore our solar system, and learn about groundbreaking astronomical discoveries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/news">Latest News</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
              <Link to="/planets">Explore Planets</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Discover the Universe</h2>
            <p className="mt-4 text-muted-foreground">
              Expand your knowledge of space and astronomy
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-card border border-border rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/20 rounded-full">
                <Newspaper className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Space News</h3>
              <p className="text-muted-foreground">
                Stay updated with the latest news, missions, and discoveries in space exploration.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/news">Read News</Link>
              </Button>
            </div>
            
            <div className="p-6 text-center bg-card border border-border rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/20 rounded-full">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Planet Guide</h3>
              <p className="text-muted-foreground">
                Explore detailed information about planets in our solar system and beyond.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/planets">View Planets</Link>
              </Button>
            </div>
            
            <div className="p-6 text-center bg-card border border-border rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/20 rounded-full">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">New Discoveries</h3>
              <p className="text-muted-foreground">
                Learn about the most recent breakthroughs and discoveries in astronomy.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/discoveries">Explore Discoveries</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent News Section */}
      <div className="py-16 bg-card">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Recent Space News</h2>
            <Button asChild variant="outline">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {recentNews.map((article) => (
              <div key={article.id} className="overflow-hidden bg-background border rounded-lg border-border">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2 text-sm text-muted-foreground">
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{article.source}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="mb-4 text-muted-foreground">{article.summary}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link to={`/news#${article.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
