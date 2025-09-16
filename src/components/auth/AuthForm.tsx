
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';

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

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const checks = [
    { label: 'At least 8 characters', test: password.length >= 8 },
    { label: 'Contains uppercase letter', test: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', test: /[a-z]/.test(password) },
    { label: 'Contains number', test: /\d/.test(password) }
  ];

  const strength = checks.filter(check => check.test).length;
  const strengthColors = ['text-red-400', 'text-orange-400', 'text-yellow-400', 'text-green-400'];
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              strength === 0 ? 'bg-red-400' :
              strength === 1 ? 'bg-red-400' :
              strength === 2 ? 'bg-orange-400' :
              strength === 3 ? 'bg-yellow-400' :
              'bg-green-400'
            }`}
            style={{ width: `${(strength / 4) * 100}%` }}
          />
        </div>
        <span className={`text-xs ${strengthColors[Math.max(0, strength - 1)]}`}>
          {strength > 0 ? strengthLabels[strength - 1] : 'Weak'}
        </span>
      </div>
      <div className="space-y-1">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center space-x-2 text-xs">
            {check.test ? (
              <CheckCircle className="w-3 h-3 text-green-400" />
            ) : (
              <XCircle className="w-3 h-3 text-gray-500" />
            )}
            <span className={check.test ? 'text-green-400' : 'text-gray-500'}>
              {check.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (!isLogin && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-green-400">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            onEmailChange(e.target.value);
            validateEmail(e.target.value);
          }}
          className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500"
          placeholder="Enter your email"
          required
        />
        {emailError && (
          <p className="text-red-400 text-sm">{emailError}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" className="text-green-400">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              onPasswordChange(e.target.value);
              validatePassword(e.target.value);
            }}
            className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500 pr-10"
            placeholder="Enter your password"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 text-green-400 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
        {passwordError && (
          <p className="text-red-400 text-sm">{passwordError}</p>
        )}
        {!isLogin && <PasswordStrengthIndicator password={password} />}
      </div>
      
      {!isLogin && (
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-green-400">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => onConfirmPasswordChange(e.target.value)}
              className="bg-gray-800 border-green-500/30 text-green-400 focus:border-green-500 pr-10"
              placeholder="Confirm your password"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 text-green-400 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-400 text-sm">Passwords do not match</p>
          )}
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={loading || !!emailError || !!passwordError || (!isLogin && password !== confirmPassword)}
        className="w-full bg-green-500 text-black hover:bg-green-400 font-bold transition-all duration-300 disabled:opacity-50"
      >
        {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
      </Button>
    </form>
  );
};
