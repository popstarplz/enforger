
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkAuth();

    // Load hCaptcha script
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://js.hcaptcha.com/1/api.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [navigate]);

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast({
        title: "CAPTCHA Required",
        description: "Please complete the CAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
          options: {
            captchaToken,
          }
        });

        if (error) {
          toast({
            title: "Error signing in",
            description: error.message,
            variant: "destructive",
          });
          // Reset captcha on error
          setCaptchaToken(null);
          if (window.hcaptcha) {
            window.hcaptcha.reset();
          }
        } else {
          toast({
            title: "Success!",
            description: "You have been signed in successfully.",
          });
          navigate('/');
        }
      } else {
        // Sign up
        if (password !== confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            captchaToken,
          }
        });

        if (error) {
          toast({
            title: "Error creating account",
            description: error.message,
            variant: "destructive",
          });
          // Reset captcha on error
          setCaptchaToken(null);
          if (window.hcaptcha) {
            window.hcaptcha.reset();
          }
        } else {
          toast({
            title: "Success!",
            description: "Please check your email to verify your account.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
      // Reset captcha on error
      setCaptchaToken(null);
      if (window.hcaptcha) {
        window.hcaptcha.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-green-400/80 hover:text-green-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-gray-900/70 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/78e25b9c-bce0-4298-a89b-5237ee0fa826.png" 
                alt="Enforger Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-green-500">ENFORGER</span>
            </div>
            <CardTitle className="text-2xl text-green-400">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <p className="text-green-400/70">
              {isLogin ? 'Sign in to your account' : 'Sign up for a new account'}
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-400">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-400">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-green-400">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              {/* CAPTCHA */}
              <div className="space-y-2">
                <Label className="text-green-400">Security Verification</Label>
                <div 
                  className="h-captcha bg-gray-800/50 rounded-lg p-4 border border-green-500/30" 
                  data-hcaptcha="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  data-callback="handleCaptchaVerify"
                  data-expired-callback="handleCaptchaExpired"
                  data-theme="dark"
                ></div>
              </div>
              
              <Button 
                type="submit" 
                disabled={loading || !captchaToken}
                className="w-full bg-green-500 text-black hover:bg-green-400 font-bold transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setCaptchaToken(null);
                  if (window.hcaptcha) {
                    window.hcaptcha.reset();
                  }
                }}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.handleCaptchaVerify = function(token) {
              window.dispatchEvent(new CustomEvent('captcha-verified', { detail: token }));
            };
            window.handleCaptchaExpired = function() {
              window.dispatchEvent(new CustomEvent('captcha-expired'));
            };
          `
        }}
      />
    </div>
  );
};

// Add event listeners for CAPTCHA callbacks
if (typeof window !== 'undefined') {
  window.addEventListener('captcha-verified', (event: any) => {
    // This will be handled by the component's state
  });
  
  window.addEventListener('captcha-expired', () => {
    // This will be handled by the component's state
  });
}

// Add type declarations for hCaptcha
declare global {
  interface Window {
    hcaptcha: {
      reset: () => void;
      getResponse: () => string;
    };
    handleCaptchaVerify: (token: string) => void;
    handleCaptchaExpired: () => void;
  }
}

export default Auth;
