
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthFormProps {
  isLogin: boolean;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  captchaToken: string | null;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
  onCaptchaVerify: (token: string) => void;
  onCaptchaExpired: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AuthForm = ({
  isLogin,
  email,
  password,
  confirmPassword,
  loading,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit
}: AuthFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-green-400">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
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
          onChange={(e) => onPasswordChange(e.target.value)}
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
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500"
            placeholder="Confirm your password"
            required
          />
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full bg-green-500 text-black hover:bg-green-400 font-bold transition-all duration-300 disabled:opacity-50"
      >
        {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
      </Button>
    </form>
  );
};
