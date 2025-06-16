
import { ArrowLeft, Phone, Navigation, Heart, Star } from "lucide-react";

interface RestaurantDetailScreenProps {
  restaurant: any;
  onBack: () => void;
}

export const RestaurantDetailScreen = ({ restaurant, onBack }: RestaurantDetailScreenProps) => {
  return (
    <div className="bg-white h-[844px] overflow-y-auto">
      {/* Header Image */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-80 object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-12 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <button className="absolute top-12 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <Heart size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="px-6 py-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{restaurant.cuisine}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{restaurant.priceLevel}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed">
            Experience authentic {restaurant.cuisine.toLowerCase()} cuisine in a beautiful setting with stunning views. 
            Our chef-crafted menu features fresh, local ingredients prepared with traditional techniques 
            passed down through generations.
          </p>
        </div>

        {/* Map Preview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
          <div className="bg-gray-100 rounded-2xl h-40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Navigation size={24} className="text-white" />
              </div>
              <p className="text-gray-600 text-sm">Interactive map coming soon</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Phone size={20} />
            Call Restaurant
          </button>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Navigation size={20} />
              Directions
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Heart size={20} />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
