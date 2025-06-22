
import { useEffect } from 'react';
import { Label } from '@/components/ui/label';

interface AuthCaptchaProps {
  onVerify: (token: string) => void;
  onExpired: () => void;
}

export const AuthCaptcha = ({ onVerify, onExpired }: AuthCaptchaProps) => {
  useEffect(() => {
    // Load hCaptcha script
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Set up global callbacks
    window.handleCaptchaVerify = (token: string) => {
      onVerify(token);
    };

    window.handleCaptchaExpired = () => {
      onExpired();
    };

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://js.hcaptcha.com/1/api.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [onVerify, onExpired]);

  return (
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
  );
};
