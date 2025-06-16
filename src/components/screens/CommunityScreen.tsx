
import { Heart, Bell } from "lucide-react";

export const CommunityScreen = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b6c0?w=40&h=40&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
      location: "Oia, Santorini",
      description: "Amazing sunset views from this incredible village! 🌅",
      likes: 127,
      comments: 23,
      timeAgo: "2h ago"
    },
    {
      id: 2,
      user: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      location: "Fira, Santorini",
      description: "Best seafood I've ever had at this local taverna! Highly recommend 🦐🐟",
      likes: 89,
      comments: 15,
      timeAgo: "5h ago"
    },
    {
      id: 3,
      user: {
        name: "Sophie Williams",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      },
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      location: "Red Beach, Akrotiri",
      description: "The volcanic red sand is absolutely stunning! Perfect for a day trip ⛱️",
      likes: 156,
      comments: 31,
      timeAgo: "1d ago"
    }
  ];

  return (
    <div className="bg-gray-50 h-[844px] overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          <Bell className="text-gray-400" size={24} />
        </div>
      </div>

      {/* Feed */}
      <div className="py-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white mb-4 shadow-sm">
            {/* Post Header */}
            <div className="flex items-center gap-3 px-6 py-4">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                <p className="text-sm text-gray-500">{post.timeAgo}</p>
              </div>
            </div>

            {/* Post Image */}
            <img
              src={post.image}
              alt="Post"
              className="w-full h-80 object-cover"
            />

            {/* Post Content */}
            <div className="px-6 py-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-blue-600">📍 {post.location}</span>
              </div>
              <p className="text-gray-800 mb-3">{post.description}</p>
              
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="text-gray-600 hover:text-blue-500 transition-colors">
                    <span className="text-sm">{post.comments} comments</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
