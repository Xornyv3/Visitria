
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if the user is already authenticated
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });
    // Listen to auth state changes and redirect if logged in
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        navigate("/");
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (isSignUp) {
      // Sign up flow
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + "/",
          data: { name }
        }
      });
      if (error) {
        setError(error.message);
      } else {
        toast({ title: "Check your email to finish signup!" });
      }
    } else {
      // Sign in flow
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleAuth} className="w-full max-w-sm p-8 rounded-xl shadow bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        {isSignUp && (
          <div className="mb-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required={isSignUp}
              disabled={loading}
            />
          </div>
        )}
        <div className="mb-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-6">
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <Button type="submit" className="w-full mb-4" disabled={loading}>
          {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <div className="text-center">
          <span className="text-gray-600 text-sm">
            {isSignUp ? "Already have an account?" : "New here?"}{" "}
            <button
              type="button"
              onClick={() => { setIsSignUp(signUp => !signUp); setError(""); }}
              className="underline hover:text-blue-500"
              tabIndex={-1}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
