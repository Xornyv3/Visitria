
import { Search, Filter } from "lucide-react";

export const SearchScreen = () => {
  const recentSearches = ["Santorini", "Greek restaurants", "Beach hotels", "Mykonos"];
  const trendingSearches = ["Summer destinations", "Luxury resorts", "Local cuisine", "Historic sites"];

  return (
    <div className="bg-white h-[844px] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Search</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search destinations, restaurants, hotels..."
            className="w-full pl-12 pr-12 py-3 bg-gray-100 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Filter className="text-gray-400" size={20} />
          </button>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Searches</h3>
        <div className="space-y-3">
          {recentSearches.map((search, index) => (
            <div key={index} className="flex items-center gap-3 py-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Search size={16} className="text-gray-500" />
              </div>
              <span className="text-gray-700">{search}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div className="px-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending</h3>
        <div className="flex flex-wrap gap-2">
          {trendingSearches.map((search, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
