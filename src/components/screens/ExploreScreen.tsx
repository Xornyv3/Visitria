
import { useState } from "react";
import { Search, Heart } from "lucide-react";

interface ExploreScreenProps {
  onSelectRestaurant: (restaurant: any) => void;
}

export const ExploreScreen = ({ onSelectRestaurant }: ExploreScreenProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Popular", "Budget", "Food", "Hotels"];
  
  const featuredDestination = {
    name: "Santorini",
    location: "Greece",
    description: "Stunning island with white-washed buildings and breathtaking sunsets.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop"
  };

  const restaurants = [
    {
      id: 1,
      name: "Sunset Taverna",
      rating: 4.8,
      priceLevel: "$$$",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      cuisine: "Mediterranean"
    },
    {
      id: 2,
      name: "Blue Dome Bistro",
      rating: 4.6,
      priceLevel: "$$",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      cuisine: "Greek"
    },
    {
      id: 3,
      name: "Ocean View Cafe",
      rating: 4.7,
      priceLevel: "$",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      cuisine: "Casual"
    }
  ];

  const hotels = [
    {
      name: "Cliff Side Resort",
      rating: 4.9,
      price: "$299/night",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"
    },
    {
      name: "Aegean Paradise",
      rating: 4.7,
      price: "$189/night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    }
  ];

  const attractions = [
    {
      name: "Oia Village",
      location: "Santorini",
      description: "Famous for stunning sunsets",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop"
    },
    {
      name: "Red Beach",
      location: "Akrotiri",
      description: "Unique volcanic red sand beach",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 h-[844px] overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Explore</h1>
          <Heart className="text-gray-400" size={24} />
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Destination */}
      <div className="px-6 mb-8">
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src={featuredDestination.image}
            alt={featuredDestination.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              console.log("Image failed to load:", featuredDestination.image);
              e.currentTarget.src = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-1">{featuredDestination.name}</h2>
            <p className="text-lg opacity-90 mb-2">📍 {featuredDestination.location}</p>
            <p className="text-sm opacity-80">{featuredDestination.description}</p>
          </div>
        </div>
      </div>

      {/* Top Restaurants */}
      <div className="mb-8">
        <div className="px-6 mb-4">
          <h3 className="text-xl font-bold text-gray-900">Top Restaurants</h3>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto pb-2">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => onSelectRestaurant(restaurant)}
              className="bg-white rounded-2xl shadow-sm min-w-[280px] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{restaurant.cuisine}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                    <span className="text-sm text-gray-600">{restaurant.priceLevel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Hotels */}
      <div className="mb-8">
        <div className="px-6 mb-4">
          <h3 className="text-xl font-bold text-gray-900">Best Hotels</h3>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto pb-2">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm min-w-[280px] overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{hotel.name}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">{hotel.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <div className="pb-8">
        <div className="px-6 mb-4">
          <h3 className="text-xl font-bold text-gray-900">Popular Destinations</h3>
        </div>
        <div className="space-y-4 px-6">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-1">{attraction.name}</h4>
                <p className="text-sm text-gray-600 mb-1">📍 {attraction.location}</p>
                <p className="text-sm text-gray-500">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
