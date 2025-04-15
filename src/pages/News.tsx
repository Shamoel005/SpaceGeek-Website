
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { newsArticles, NewsArticle } from "@/lib/space-data";
import { ChevronDown, ChevronUp } from "lucide-react";

const News = () => {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const location = useLocation();
  
  // Sort news by date (newest first)
  const sortedNews = [...newsArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    // Check if there's a hash in the URL (for direct linking to an article)
    if (location.hash) {
      const articleId = location.hash.replace('#', '');
      setExpandedArticle(articleId);
      
      // Scroll to the article
      setTimeout(() => {
        const element = document.getElementById(`article-${articleId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  const toggleArticle = (articleId: string) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="bg-background min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Space News</h1>
          <p className="text-muted-foreground mb-8">
            Stay updated with the latest developments in space exploration and astronomy
          </p>
          
          <div className="space-y-6">
            {sortedNews.map((article) => (
              <Card 
                key={article.id} 
                id={`article-${article.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedArticle === article.id ? 'ring-1 ring-primary' : ''
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>{article.source}</span>
                          {article.category && (
                            <>
                              <span className="mx-2">•</span>
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                                {article.category}
                              </span>
                            </>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                        <p className="text-muted-foreground mb-4">{article.summary}</p>
                      </div>
                      <button 
                        onClick={() => toggleArticle(article.id)}
                        className="ml-2 p-2 hover:bg-muted rounded-full flex-shrink-0"
                      >
                        {expandedArticle === article.id ? <ChevronUp /> : <ChevronDown />}
                      </button>
                    </div>
                    
                    {expandedArticle === article.id && (
                      <CardContent className="px-0 pt-4 pb-0 border-t mt-4">
                        <p className="whitespace-pre-line">{article.content}</p>
                      </CardContent>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
