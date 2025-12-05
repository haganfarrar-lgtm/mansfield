export interface City {
  slug: string;
  name: string;
  county: string;
  distance: number;
  population: string;
  description: string;
  neighborhoods?: string[];
}

export const cities: City[] = [
  { slug: 'mansfield', name: 'Mansfield', county: 'Tarrant', distance: 0, population: '73,000+', description: 'Our home base and primary service area.', neighborhoods: ['Walnut Creek', 'Country Club', 'Sugar Creek', 'Creekside'] },
  { slug: 'arlington', name: 'Arlington', county: 'Tarrant', distance: 7, population: '398,000+', description: 'Home to major sports venues and entertainment.', neighborhoods: ['Viridian', 'Woodland West'] },
  { slug: 'grand-prairie', name: 'Grand Prairie', county: 'Dallas', distance: 9, population: '196,000+', description: 'A growing city with diverse communities.', neighborhoods: ['Lakeside', 'Great Southwest'] },
  { slug: 'burleson', name: 'Burleson', county: 'Johnson', distance: 8, population: '51,000+', description: 'A friendly community with small-town charm.', neighborhoods: ['Creekside', 'Hidden Creek'] },
  { slug: 'midlothian', name: 'Midlothian', county: 'Ellis', distance: 12, population: '35,000+', description: 'A rapidly growing community south of Dallas.', neighborhoods: ['Midlothian Meadows', 'Westchester'] },
  { slug: 'cedar-hill', name: 'Cedar Hill', county: 'Dallas', distance: 10, population: '48,000+', description: 'Known for its scenic hillside views.', neighborhoods: ['High Pointe', 'Penn Farm'] },
  { slug: 'desoto', name: 'DeSoto', county: 'Dallas', distance: 11, population: '55,000+', description: 'A thriving community with excellent amenities.', neighborhoods: ['Hampton Place', 'Westmoreland Estates'] },
  { slug: 'duncanville', name: 'Duncanville', county: 'Dallas', distance: 13, population: '39,000+', description: 'A well-established suburban community.', neighborhoods: ['Merrifield', 'Country Brook'] },
  { slug: 'lancaster', name: 'Lancaster', county: 'Dallas', distance: 16, population: '41,000+', description: 'A historic city with modern growth.', neighborhoods: ['Pleasant Run Farms', 'Ten Mile Creek'] },
  { slug: 'red-oak', name: 'Red Oak', county: 'Ellis', distance: 15, population: '13,000+', description: 'A small city with friendly atmosphere.', neighborhoods: ['Red Oak Creek', 'Ovilla Oaks'] },
  { slug: 'waxahachie', name: 'Waxahachie', county: 'Ellis', distance: 20, population: '41,000+', description: 'Known for its Victorian architecture.', neighborhoods: ['Rockett', 'Greathouse'] },
  { slug: 'cleburne', name: 'Cleburne', county: 'Johnson', distance: 22, population: '31,000+', description: 'A charming city with historic downtown.', neighborhoods: ['The Meadows', 'Oak Crest'] },
  { slug: 'fort-worth', name: 'Fort Worth', county: 'Tarrant', distance: 18, population: '935,000+', description: 'A major metropolitan area with diverse needs.', neighborhoods: ['Westover Hills', 'Rivercrest'] },
  { slug: 'dallas', name: 'Dallas', county: 'Dallas', distance: 25, population: '1,300,000+', description: 'Major city with endless opportunities.', neighborhoods: ['Oak Cliff', 'Lake Highlands'] },
  { slug: 'irving', name: 'Irving', county: 'Dallas', distance: 20, population: '256,000+', description: 'A diverse city near DFW Airport.', neighborhoods: ['Las Colinas', 'Valley Ranch'] },
  { slug: 'euless', name: 'Euless', county: 'Tarrant', distance: 15, population: '60,000+', description: 'Central location in the DFW metroplex.', neighborhoods: ['Bear Creek', 'Texas Star'] },
  { slug: 'bedford', name: 'Bedford', county: 'Tarrant', distance: 16, population: '50,000+', description: 'Well-established community with parks.', neighborhoods: ['Meadow Creek Estates', 'Central Park'] },
  { slug: 'hurst', name: 'Hurst', county: 'Tarrant', distance: 17, population: '40,000+', description: 'Family-friendly city in mid-cities area.', neighborhoods: ['Cimarron Park', 'Brookhollow'] },
  { slug: 'keller', name: 'Keller', county: 'Tarrant', distance: 20, population: '50,000+', description: 'A thriving community with excellent schools.', neighborhoods: ['Hidden Lakes', 'Marshall Ridge'] },
  { slug: 'north-richland-hills', name: 'North Richland Hills', county: 'Tarrant', distance: 19, population: '70,000+', description: 'Large suburban community in Tarrant County.', neighborhoods: ['Meadow Lakes', 'North Park'] },
  { slug: 'grapevine', name: 'Grapevine', county: 'Tarrant', distance: 21, population: '54,000+', description: 'Historic city with charming character.', neighborhoods: ['Lakeside', 'Stone Bridge Oaks'] },
  { slug: 'southlake', name: 'Southlake', county: 'Tarrant', distance: 24, population: '31,000+', description: 'Affluent community with top-rated schools.', neighborhoods: ['Timarron', 'Shady Oaks'] },
  { slug: 'colleyville', name: 'Colleyville', county: 'Tarrant', distance: 22, population: '27,000+', description: 'An affluent city known for its large lots.', neighborhoods: ['Montclair Parc', 'Pleasant Run'] },
  { slug: 'coppell', name: 'Coppell', county: 'Dallas', distance: 23, population: '42,000+', description: 'Well-established community with mature landscaping.', neighborhoods: ['Riverchase', 'Northlake Woodlands'] },
  { slug: 'carrollton', name: 'Carrollton', county: 'Denton', distance: 27, population: '139,000+', description: 'Large suburban city in Dallas County.', neighborhoods: ['Homestead', 'Oak Hills'] },
  { slug: 'farmers-branch', name: 'Farmers Branch', county: 'Dallas', distance: 24, population: '36,000+', description: 'Established community near Dallas.', neighborhoods: ['Bent Tree', 'Rawhide'] },
  { slug: 'richardson', name: 'Richardson', county: 'Dallas', distance: 30, population: '120,000+', description: 'Technology hub with strong economy.', neighborhoods: ['Canyon Creek', 'Heights'] },
  { slug: 'garland', name: 'Garland', county: 'Dallas', distance: 28, population: '240,000+', description: 'Major city in northeast Dallas County.', neighborhoods: ['Firewheel', 'Duck Creek'] },
  { slug: 'rowlett', name: 'Rowlett', county: 'Dallas', distance: 32, population: '66,000+', description: 'Growing lakeside community.', neighborhoods: ['Pecan Grove', 'Springfield'] },
  { slug: 'mesquite', name: 'Mesquite', county: 'Dallas', distance: 26, population: '150,000+', description: 'Diverse community with family atmosphere.', neighborhoods: ['Meadowbrook', 'Sunnyvale'] },
  { slug: 'ennis', name: 'Ennis', county: 'Ellis', distance: 28, population: '20,000+', description: 'Known as the Bluebonnet City of Texas.', neighborhoods: ['Ennis Meadows', 'South Main'] },
  { slug: 'lewisville', name: 'Lewisville', county: 'Denton', distance: 30, population: '111,000+', description: 'Growing city with diverse neighborhoods.', neighborhoods: ['Castle Hills', 'Valley Vista'] },
  { slug: 'flower-mound', name: 'Flower Mound', county: 'Denton', distance: 28, population: '79,000+', description: 'Family-friendly community with excellent schools.', neighborhoods: ['Bridlewood', 'Wellington'] },
  { slug: 'highland-village', name: 'Highland Village', county: 'Denton', distance: 29, population: '16,000+', description: 'Picturesque city near Lewisville Lake.', neighborhoods: ['The Shores', 'Highland Meadows'] },
  { slug: 'the-colony', name: 'The Colony', county: 'Denton', distance: 32, population: '45,000+', description: 'Lakeside community with recreation.', neighborhoods: ['The Tribute', 'Stewart Peninsula'] },
  { slug: 'denton', name: 'Denton', county: 'Denton', distance: 35, population: '148,000+', description: 'College town with vibrant culture.', neighborhoods: ['Pecan Creek', 'Robson Ranch'] },
  { slug: 'frisco', name: 'Frisco', county: 'Collin', distance: 35, population: '220,000+', description: 'One of the fastest-growing cities in America.', neighborhoods: ['Starwood', 'Newman Village'] },
  { slug: 'plano', name: 'Plano', county: 'Collin', distance: 33, population: '287,000+', description: 'Major city with established neighborhoods.', neighborhoods: ['Willow Bend', 'Kings Ridge'] },
  { slug: 'allen', name: 'Allen', county: 'Collin', distance: 37, population: '105,000+', description: 'Fast-growing community with amenities.', neighborhoods: ['Watters Creek', 'Twin Creeks'] },
  { slug: 'mckinney', name: 'McKinney', county: 'Collin', distance: 40, population: '199,000+', description: 'Named Best Place to Live in America.', neighborhoods: ['Adriatica', 'Stonebridge Ranch'] },
  { slug: 'wylie', name: 'Wylie', county: 'Collin', distance: 38, population: '57,000+', description: 'Growing community with small-town feel.', neighborhoods: ['Waterstone Estates', 'Woodbridge'] },
  { slug: 'rockwall', name: 'Rockwall', county: 'Rockwall', distance: 36, population: '47,000+', description: 'Lakeside city with charm and growth.', neighborhoods: ['The Shores', 'Chandlers Landing'] },
  { slug: 'weatherford', name: 'Weatherford', county: 'Parker', distance: 42, population: '32,000+', description: 'Historic community west of Fort Worth.', neighborhoods: ['Clear Fork', 'Oak Hollow'] },
  { slug: 'crowley', name: 'Crowley', county: 'Tarrant', distance: 11, population: '16,000+', description: 'Growing community in southern Tarrant.', neighborhoods: ['Eagle Ranch', 'Remington Park'] },
  { slug: 'kennedale', name: 'Kennedale', county: 'Tarrant', distance: 6, population: '8,500+', description: 'Small city with friendly atmosphere.', neighborhoods: ['Kennedale Ridge', 'Briar Meadow'] },
  { slug: 'venus', name: 'Venus', county: 'Johnson', distance: 18, population: '4,500+', description: 'Small town south of Mansfield.', neighborhoods: ['Venus Creek', 'Cedar Hills'] },
  { slug: 'alvarado', name: 'Alvarado', county: 'Johnson', distance: 24, population: '4,300+', description: 'Historic small town atmosphere.', neighborhoods: ['Alvarado Estates', 'Country View'] },
  { slug: 'joshua', name: 'Joshua', county: 'Johnson', distance: 26, population: '8,000+', description: 'Small community with rural charm.', neighborhoods: ['Chisholm Trail Ranch', 'Oak Creek'] },
  { slug: 'godley', name: 'Godley', county: 'Johnson', distance: 28, population: '1,300+', description: 'Rural community near Mansfield.', neighborhoods: ['Godley Estates', 'Prairie View'] },
  { slug: 'rendon', name: 'Rendon', county: 'Tarrant', distance: 5, population: '14,000+', description: 'Unincorporated community near Mansfield.', neighborhoods: ['Rendon Heights', 'Woodland Trails'] },
];

export const getCityBySlug = (slug: string) => cities.find(c => c.slug === slug);
export const getAllCitySlugs = () => cities.map(c => c.slug);
export const getNearbyCities = (citySlug: string, limit = 6) => {
  const current = getCityBySlug(citySlug);
  if (!current) return cities.slice(0, limit);
  return cities.filter(c => c.slug !== citySlug).sort((a, b) => a.distance - b.distance).slice(0, limit);
};
