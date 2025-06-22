
import { CardHeader, CardTitle } from '@/components/ui/card';

interface AuthHeaderProps {
  isLogin: boolean;
}

export const AuthHeader = ({ isLogin }: AuthHeaderProps) => {
  return (
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
  );
};
