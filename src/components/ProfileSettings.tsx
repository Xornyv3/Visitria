
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export function ProfileSettings() {
  const { user, profile, refreshProfile } = useAuth();
  const [name, setName] = useState(profile?.name || "");
  const [profilePicture, setProfilePicture] = useState(profile?.profile_picture_url || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        profile_picture_url: profilePicture,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user?.id);
    setLoading(false);
    if (error) {
      toast({ title: "Couldn't update profile", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile updated!" });
      refreshProfile();
    }
  };

  // Display subscription status
  return (
    <form onSubmit={handleSave} className="space-y-4 bg-gray-50 p-4 rounded-2xl shadow">
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Name</label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Profile Picture URL</label>
        <Input
          value={profilePicture}
          onChange={e => setProfilePicture(e.target.value)}
          placeholder="Paste image URL"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Email</label>
        <Input value={profile?.email ?? ""} disabled readOnly />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Subscription Status</label>
        <div>
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${profile?.subscription_status ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
            {profile?.subscription_status ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
      <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save Changes"}</Button>
    </form>
  );
}
