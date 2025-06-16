
import { Search, MapPin, Navigation, Filter, Star } from "lucide-react";
import { useState } from "react";

export const MapScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Restaurants", "Hotels", "Attractions", "Cafes"];
  
  const locations = [
    {
      id: 1,
      name: "Sunset Taverna",
      type: "Restaurant",
      rating: 4.8,
      distance: "0.2 km",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop",
      position: { top: "35%", left: "30%" }
    },
    {
      id: 2,
      name: "Ocean View Hotel",
      type: "Hotel",
      rating: 4.6,
      distance: "0.5 km",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=80&fit=crop",
      position: { top: "45%", left: "65%" }
    },
    {
      id: 3,
      name: "Central Park",
      type: "Attraction",
      rating: 4.9,
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=80&h=80&fit=crop",
      position: { top: "25%", left: "50%" }
    },
    {
      id: 4,
      name: "Coffee Corner",
      type: "Cafe",
      rating: 4.7,
      distance: "0.1 km",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=80&h=80&fit=crop",
      position: { top: "55%", left: "40%" }
    }
  ];

  const filteredLocations = selectedCategory === "All" 
    ? locations 
    : locations.filter(location => location.type === selectedCategory.slice(0, -1));

  return (
    <div className="bg-white h-[844px] flex flex-col">
      {/* Header Section */}
      <div className="px-4 pt-12 pb-4 bg-white border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Explore Map</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-gray-50 rounded-xl border-none outline-none text-gray-900 placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Filter className="text-gray-400 w-5 h-5" />
          </button>
        </div>
        
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1 mx-4 my-4 bg-gradient-to-br from-green-50 via-blue-50 to-blue-100 rounded-2xl relative overflow-hidden">
        {/* Map Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Map Roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-4 right-4 h-1 bg-gray-300/50 rounded"></div>
          <div className="absolute top-2/3 left-4 right-4 h-1.5 bg-gray-400/60 rounded"></div>
          <div className="absolute top-4 bottom-4 left-1/3 w-1 bg-gray-300/50 rounded"></div>
          <div className="absolute top-4 bottom-4 left-2/3 w-1.5 bg-gray-400/60 rounded"></div>
        </div>

        {/* Location Pins */}
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: location.position.top, left: location.position.left }}
          >
            <div className="relative">
              <MapPin className="text-red-500 w-7 h-7 drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{location.id}</span>
              </div>
            </div>
          </div>
        ))}

        {/* User Location */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
        </div>

        {/* Navigation Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
          <Navigation className="text-blue-600 w-5 h-5" />
        </button>
      </div>

      {/* Location Cards Section */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Nearby Places</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filteredLocations.map((location) => (
            <div key={location.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 min-w-[260px] flex-shrink-0">
              <div className="flex gap-3">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{location.name}</h4>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="text-yellow-500 w-3 h-3 fill-current" />
                    <span className="text-xs font-medium">{location.rating}</span>
                    <span className="text-xs text-gray-600">• {location.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{location.distance} away</p>
                    <button className="text-blue-600 text-xs font-medium px-2 py-1 rounded-md hover:bg-blue-50">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
