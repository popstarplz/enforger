
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { AuthForm } from '@/components/auth/AuthForm';
import { AuthToggle } from '@/components/auth/AuthToggle';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const {
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
  } = useAuth();

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
          <AuthHeader isLogin={isLogin} />
          
          <CardContent>
            <AuthForm
              isLogin={isLogin}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              loading={loading}
              captchaToken={captchaToken}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onConfirmPasswordChange={setConfirmPassword}
              onCaptchaVerify={handleCaptchaVerify}
              onCaptchaExpired={handleCaptchaExpired}
              onSubmit={handleSubmit}
            />
            
            <AuthToggle isLogin={isLogin} onToggle={toggleAuthMode} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
