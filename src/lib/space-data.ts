
// Planet data
export interface Planet {
  id: string;
  name: string;
  type: string;
  description: string;
  distanceFromSun: string;
  diameter: string;
  orbitalPeriod: string;
  rotationPeriod: string;
  gravity: string;
  averageTemp: string;
  moons: number;
  imageUrl: string;
  funFact: string;
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestrial",
    description: "Mercury is the smallest and innermost planet in the Solar System. It has no natural satellites and no substantial atmosphere. Mercury has a large iron core which generates a magnetic field about 1% as strong as that of Earth's.",
    distanceFromSun: "57.9 million km",
    diameter: "4,879 km",
    orbitalPeriod: "88 Earth days",
    rotationPeriod: "58.6 Earth days",
    gravity: "3.7 m/s²",
    averageTemp: "167°C",
    moons: 0,
    imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800",
    funFact: "Mercury's surface resembles that of the Moon with extensive mare-like plains and heavily cratered terrains."
  },
  {
    id: "venus",
    name: "Venus",
    type: "Terrestrial",
    description: "Venus is the second planet from the Sun and is often called Earth's sister planet due to similar size and mass. However, its atmosphere is toxic and consists mainly of carbon dioxide with clouds of sulfuric acid.",
    distanceFromSun: "108.2 million km",
    diameter: "12,104 km",
    orbitalPeriod: "225 Earth days",
    rotationPeriod: "243 Earth days",
    gravity: "8.87 m/s²",
    averageTemp: "464°C",
    moons: 0,
    imageUrl: "https://images.unsplash.com/photo-1610025337750-c56fecd6c179?q=80&w=800",
    funFact: "Venus rotates in the opposite direction to most planets, meaning the Sun rises in the west and sets in the east."
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestrial",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is covered with water, with the remainder consisting of continents and islands.",
    distanceFromSun: "149.6 million km",
    diameter: "12,742 km",
    orbitalPeriod: "365.25 days",
    rotationPeriod: "24 hours",
    gravity: "9.8 m/s²",
    averageTemp: "15°C",
    moons: 1,
    imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800",
    funFact: "Earth is the only planet not named after a mythological god or goddess."
  },
  {
    id: "mars",
    name: "Mars",
    type: "Terrestrial",
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is often called the 'Red Planet' due to its reddish appearance, caused by iron oxide (rust) on its surface.",
    distanceFromSun: "227.9 million km",
    diameter: "6,779 km",
    orbitalPeriod: "687 Earth days",
    rotationPeriod: "24.6 hours",
    gravity: "3.71 m/s²",
    averageTemp: "-65°C",
    moons: 2,
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    funFact: "Mars is home to Olympus Mons, the largest volcano and highest known mountain in our solar system."
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.",
    distanceFromSun: "778.5 million km",
    diameter: "139,820 km",
    orbitalPeriod: "11.86 Earth years",
    rotationPeriod: "9.93 hours",
    gravity: "24.79 m/s²",
    averageTemp: "-110°C",
    moons: 79,
    imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=800",
    funFact: "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years."
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth.",
    distanceFromSun: "1.4 billion km",
    diameter: "116,460 km",
    orbitalPeriod: "29.46 Earth years",
    rotationPeriod: "10.7 hours",
    gravity: "10.44 m/s²",
    averageTemp: "-140°C",
    moons: 82,
    imageUrl: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=800",
    funFact: "Saturn's rings are mostly made of ice particles, with a smaller amount of rocky debris and dust."
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It is named after Greek sky deity Uranus (Caelus), the father of Cronus (Saturn) and grandfather of Zeus (Jupiter).",
    distanceFromSun: "2.9 billion km",
    diameter: "50,724 km",
    orbitalPeriod: "84 Earth years",
    rotationPeriod: "17.2 hours",
    gravity: "8.69 m/s²",
    averageTemp: "-195°C",
    moons: 27,
    imageUrl: "https://images.unsplash.com/photo-1614314107768-6018061a5545?q=80&w=800",
    funFact: "Uranus rotates on its side with an axial tilt of 98 degrees."
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    description: "Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
    distanceFromSun: "4.5 billion km",
    diameter: "49,244 km",
    orbitalPeriod: "164.8 Earth years",
    rotationPeriod: "16.1 hours",
    gravity: "11.15 m/s²",
    averageTemp: "-200°C",
    moons: 14,
    imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800",
    funFact: "Neptune has the strongest winds in the Solar System, reaching up to 2,100 km/h."
  }
];

// Space news data
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  source: string;
  imageUrl: string;
  category: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "NASA's Perseverance Rover Discovers Organic Material on Mars",
    summary: "The rover has found organic molecules that could indicate past life on the Red Planet.",
    content: "NASA's Perseverance rover has discovered organic molecules preserved in rocks on Mars, providing new evidence that the planet once had conditions that could have supported life. The rover's instruments detected carbon-containing molecules in rocks from an ancient river delta in Jezero Crater. While these organic molecules are not definitive proof of past life, they are considered the building blocks of life as we know it. Scientists are excited about these findings as they continue to search for signs of ancient microbial life on Mars. Samples containing these organic materials will be returned to Earth by future missions for more detailed analysis.",
    date: "2025-04-10",
    source: "NASA",
    imageUrl: "https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=800",
    category: "Mars"
  },
  {
    id: "2",
    title: "James Webb Space Telescope Reveals New Details of Distant Galaxies",
    summary: "The space telescope has captured stunning images of galaxies formed shortly after the Big Bang.",
    content: "The James Webb Space Telescope (JWST) has captured incredible new images of some of the earliest galaxies in the universe, formed just a few hundred million years after the Big Bang. These observations are providing astronomers with unprecedented insights into galaxy formation and evolution in the early universe. The images show galaxies with unexpected complexity and structure, challenging some existing theories about early galaxy formation. The JWST's infrared capabilities allow it to see through cosmic dust and observe objects at distances previously impossible to reach with earlier telescopes. Scientists are particularly excited about several candidate galaxies that appear to be more massive and structured than models predicted for that early epoch.",
    date: "2025-04-05",
    source: "Space Telescope Science Institute",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800",
    category: "Astronomy"
  },
  {
    id: "3",
    title: "SpaceX Successfully Tests Full Starship System",
    summary: "The fourth test flight demonstrates successful orbital capabilities and recovery.",
    content: "SpaceX has successfully completed its fourth test flight of the complete Starship system, achieving all primary mission objectives including orbital insertion, controlled reentry, and recovery of both the Super Heavy booster and Starship vehicle. This marks a major milestone in the development of the fully reusable transportation system designed to carry crew and cargo to Earth orbit, the Moon, Mars, and beyond. During the test, the Super Heavy booster separated cleanly and performed a controlled landing on the launch tower's arms. The Starship vehicle then completed nearly a full orbit before reentering Earth's atmosphere and splashing down in the Indian Ocean. This successful test brings humanity one step closer to establishing a permanent presence on the Moon and eventually Mars.",
    date: "2025-03-28",
    source: "SpaceX",
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800",
    category: "Space Exploration"
  },
  {
    id: "4",
    title: "Astronomers Detect Possible Signs of Life in Venus's Atmosphere",
    summary: "New observations have identified a chemical compound that could be associated with biological processes.",
    content: "A team of international astronomers has detected significant amounts of phosphine gas in Venus's atmosphere, a chemical that on Earth is primarily produced by living organisms. The discovery, made using both the James Webb Space Telescope and ground-based observatories, supports controversial findings first reported in 2020. The new measurements show consistent levels of phosphine that cannot be easily explained by known non-biological chemical processes on Venus. While this is not definitive proof of life, it presents a compelling case for further investigation. Scientists are now planning dedicated missions to Venus to study its atmosphere in greater detail and potentially resolve whether the phosphine is indeed a biosignature or the result of some unknown chemical process.",
    date: "2025-03-15",
    source: "Royal Astronomical Society",
    imageUrl: "https://images.unsplash.com/photo-1614314107768-6018061a5545?q=80&w=800",
    category: "Astrobiology"
  },
  {
    id: "5",
    title: "NASA and ESA Announce Joint Mission to Saturn's Moon Enceladus",
    summary: "The mission will search for signs of life in the moon's subsurface ocean.",
    content: "NASA and the European Space Agency (ESA) have announced plans for a joint mission to Saturn's moon Enceladus, targeting a launch in 2030. The mission, named Enceladus Life Finder (ELF), will focus on studying the moon's subsurface ocean and analyzing the composition of its water plumes that erupt through cracks in the icy surface. Scientists believe Enceladus is one of the most promising places in our solar system to search for extraterrestrial life due to its warm subsurface ocean, organic compounds, and energy sources. The spacecraft will make multiple close flybys through Enceladus's plumes, collecting and analyzing samples with advanced instruments designed to detect organic molecules and potential biosignatures.",
    date: "2025-03-08",
    source: "NASA/ESA",
    imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800",
    category: "Space Exploration"
  }
];

// Recent discoveries data
export interface Discovery {
  id: string;
  title: string;
  description: string;
  date: string;
  researchers: string;
  imageUrl: string;
  category: string;
}

export const discoveries: Discovery[] = [
  {
    id: "1",
    title: "Closest Black Hole to Earth Discovered",
    description: "Astronomers have discovered a black hole just 1,000 light-years from Earth, making it the closest known black hole to our solar system. The black hole is part of a triple system that can be seen with the naked eye. This discovery suggests that there might be many more black holes in our cosmic neighborhood than previously thought.",
    date: "2025-02-15",
    researchers: "European Southern Observatory",
    imageUrl: "https://images.unsplash.com/photo-1534533952833-ac797ee5901f?q=80&w=800",
    category: "Black Holes"
  },
  {
    id: "2",
    title: "Water Vapor Detected in Habitable Zone Exoplanet",
    description: "For the first time, astronomers have detected water vapor in the atmosphere of an exoplanet located in the habitable zone of its star. The planet, designated K2-18b, is about twice the size of Earth and eight times as massive. This discovery marks a significant step in the search for potentially habitable worlds beyond our solar system.",
    date: "2025-01-20",
    researchers: "University College London",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800",
    category: "Exoplanets"
  },
  {
    id: "3",
    title: "New Dwarf Planet Discovered in Outer Solar System",
    description: "Astronomers have identified a new dwarf planet orbiting in the outer reaches of our solar system. Temporarily designated 2024 FZ53, this celestial body is estimated to be about 400 kilometers in diameter and has an orbital period of approximately 287 years. This discovery adds to our understanding of the Kuiper Belt and the formation of our solar system.",
    date: "2025-01-05",
    researchers: "Minor Planet Center",
    imageUrl: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800",
    category: "Solar System"
  },
  {
    id: "4",
    title: "First Direct Image of a Sun-like Star with Multiple Exoplanets",
    description: "Using advanced imaging techniques, astronomers have captured the first direct image of a Sun-like star with multiple orbiting exoplanets. The star system, located about 300 light-years away, features three gas giant planets. This breakthrough provides valuable insights into the formation and evolution of planetary systems similar to our own.",
    date: "2024-12-10",
    researchers: "European Southern Observatory",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800",
    category: "Exoplanets"
  },
  {
    id: "5",
    title: "Mysterious Fast Radio Burst Source Identified",
    description: "Scientists have finally identified the source of a mysterious repeating fast radio burst (FRB) that has puzzled astronomers for years. The signals originate from a magnetar—a type of neutron star with an extremely powerful magnetic field—located in a distant galaxy. This discovery provides crucial evidence about the nature of these enigmatic cosmic phenomena.",
    date: "2024-11-25",
    researchers: "Canadian Hydrogen Intensity Mapping Experiment",
    imageUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=800",
    category: "Astrophysics"
  }
];
