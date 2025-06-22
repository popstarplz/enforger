
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useAuth = () => {
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
  }, [navigate]);

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  const resetCaptcha = () => {
    setCaptchaToken(null);
    if (window.hcaptcha) {
      window.hcaptcha.reset();
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    resetCaptcha();
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
          resetCaptcha();
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
          resetCaptcha();
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
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return {
    isLogin,
    email,
    password,
    confirmPassword,
    loading,
    captchaToken,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleCaptchaVerify,
    handleCaptchaExpired,
    toggleAuthMode,
    handleSubmit
  };
};
