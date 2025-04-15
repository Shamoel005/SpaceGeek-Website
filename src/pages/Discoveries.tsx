
import { Card, CardContent } from "@/components/ui/card";
import { discoveries } from "@/lib/space-data";

const Discoveries = () => {
  // Sort discoveries by date (newest first)
  const sortedDiscoveries = [...discoveries].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-background min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Recent Astronomical Discoveries</h1>
          <p className="text-muted-foreground mb-8">
            Explore the latest breakthroughs and findings in astronomy and space science
          </p>
          
          <div className="space-y-8">
            {sortedDiscoveries.map((discovery) => (
              <Card key={discovery.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={discovery.imageUrl} 
                      alt={discovery.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-2">
                      <span>{new Date(discovery.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{discovery.researchers}</span>
                      {discovery.category && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                            {discovery.category}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold mb-3">{discovery.title}</h2>
                    <p className="text-muted-foreground">{discovery.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discoveries;
