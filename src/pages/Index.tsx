import { useState } from "react";
import { ExploreScreen } from "@/components/screens/ExploreScreen";
import { SearchScreen } from "@/components/screens/SearchScreen";
import { MapScreen } from "@/components/screens/MapScreen";
import { CommunityScreen } from "@/components/screens/CommunityScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";
import { RestaurantDetailScreen } from "@/components/screens/RestaurantDetailScreen";
import { useAuth } from "@/hooks/useAuth";
import AuthPage from "./Auth";
import { ProfileSettings } from "@/components/ProfileSettings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const { user, loading } = useAuth();

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    // Show Auth screen when not authenticated
    return <AuthPage />;
  }

  const renderActiveScreen = () => {
    if (selectedRestaurant) {
      return (
        <RestaurantDetailScreen
          restaurant={selectedRestaurant}
          onBack={() => setSelectedRestaurant(null)}
        />
      );
    }

    switch (activeTab) {
      case "explore":
        return <ExploreScreen onSelectRestaurant={setSelectedRestaurant} />;
      case "search":
        return <SearchScreen />;
      case "map":
        return <MapScreen />;
      case "community":
        return <CommunityScreen />;
      case "profile":
        return (
          <div className="px-4 pt-4 pb-20">
            <ProfileSettings />
          </div>
        );
      default:
        return <ExploreScreen onSelectRestaurant={setSelectedRestaurant} />;
    }
  };

  return (
    <div className="max-w-[390px] mx-auto bg-white min-h-[844px] relative overflow-hidden">
      <div className="pb-20">
        {renderActiveScreen()}
      </div>
      {!selectedRestaurant && (
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default Index;
