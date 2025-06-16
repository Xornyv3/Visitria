
import { Heart, Bookmark } from "lucide-react";

export const ProfileScreen = () => {
  const savedPlaces = [
    {
      name: "Sunset Taverna",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop",
      type: "Restaurant"
    },
    {
      name: "Cliff Side Resort",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=100&h=100&fit=crop",
      type: "Hotel"
    },
    {
      name: "Oia Village",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=100&h=100&fit=crop",
      type: "Attraction"
    }
  ];

  return (
    <div className="bg-white h-[844px] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-center">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-1">John Traveler</h1>
        <p className="text-gray-600">Explorer • 47 places visited</p>
        
        <div className="flex justify-center gap-4 mt-6">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">127</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">1.2K</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900">47</div>
            <div className="text-sm text-gray-600">Places</div>
          </div>
        </div>
      </div>

      {/* Saved Places */}
      <div className="px-6">
        <div className="flex items-center gap-2 mb-4">
          <Bookmark className="text-gray-700" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">Saved Places</h3>
        </div>
        
        <div className="space-y-3">
          {savedPlaces.map((place, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <img
                src={place.image}
                alt={place.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{place.name}</h4>
                <p className="text-sm text-gray-600">{place.location}</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {place.type}
                </span>
              </div>
              <Heart className="text-red-500 fill-current" size={20} />
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="mt-8 space-y-3">
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-2xl text-gray-700 hover:bg-gray-100 transition-colors">
            Account Settings
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-2xl text-gray-700 hover:bg-gray-100 transition-colors">
            Preferences
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-2xl text-gray-700 hover:bg-gray-100 transition-colors">
            Help & Support
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-2xl text-red-600 hover:bg-red-50 transition-colors">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
