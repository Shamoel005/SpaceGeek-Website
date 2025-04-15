
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { planets } from "@/lib/space-data";

const Planets = () => {
  return (
    <div className="bg-background min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-2">Solar System Planets</h1>
          <p className="text-muted-foreground">
            Explore the eight planets of our solar system and learn about their unique characteristics
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {planets.map((planet) => (
            <Link 
              key={planet.id} 
              to={`/planets/${planet.id}`}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={planet.imageUrl} 
                    alt={planet.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
                  <div className="text-sm text-muted-foreground mb-3">{planet.type} Planet</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-muted/40 p-2 rounded">
                      <div className="font-medium">Diameter</div>
                      <div className="text-muted-foreground">{planet.diameter}</div>
                    </div>
                    <div className="bg-muted/40 p-2 rounded">
                      <div className="font-medium">Moons</div>
                      <div className="text-muted-foreground">{planet.moons}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planets;
