
interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

export const AuthToggle = ({ isLogin, onToggle }: AuthToggleProps) => {
  return (
    <div className="mt-6 text-center">
      <button
        onClick={onToggle}
        className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
      >
        {isLogin 
          ? "Don't have an account? Sign up" 
          : "Already have an account? Sign in"
        }
      </button>
    </div>
  );
};
