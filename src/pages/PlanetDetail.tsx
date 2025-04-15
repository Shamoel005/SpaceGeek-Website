
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThermometerSun, Ruler, Clock, Compass, MoveHorizontal } from "lucide-react";
import { planets } from "@/lib/space-data";
import { useEffect } from "react";

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const planet = planets.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!planet) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Planet not found</h1>
        <p className="mb-6">The planet you're looking for doesn't exist in our database.</p>
        <Button asChild>
          <Link to="/planets">Return to Planets</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      {/* Hero section with planet image */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={planet.imageUrl} 
            alt={planet.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <Button asChild variant="outline" size="sm" className="mb-4 bg-background/80 backdrop-blur-sm">
            <Link to="/planets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Planets
            </Link>
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{planet.name}</h1>
          <div className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm backdrop-blur-sm">
            {planet.type} Planet
          </div>
        </div>
      </div>
      
      {/* Planet information */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center">
              <MoveHorizontal className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Distance from Sun</div>
              <div className="font-medium mt-1">{planet.distanceFromSun}</div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Orbital Period</div>
              <div className="font-medium mt-1">{planet.orbitalPeriod}</div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center">
              <ThermometerSun className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Average Temperature</div>
              <div className="font-medium mt-1">{planet.averageTemp}</div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground">{planet.description}</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Physical Characteristics</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <div className="font-medium">Diameter</div>
                  <div className="text-muted-foreground">{planet.diameter}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <div className="font-medium">Rotation Period</div>
                  <div className="text-muted-foreground">{planet.rotationPeriod}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Compass className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <div className="font-medium">Gravity</div>
                  <div className="text-muted-foreground">{planet.gravity}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <div>
                  <div className="font-medium">Moons</div>
                  <div className="text-muted-foreground">{planet.moons}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Did You Know?</h2>
            <p className="text-muted-foreground">
              {planet.funFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
