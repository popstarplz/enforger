
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-green-500 mb-4 glow-text">404</h1>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Page Not Found</h2>
            <p className="text-green-400/70 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-green-500 text-black hover:bg-green-400 font-bold px-6 py-3"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-6 py-3"
            >
              <Link to="/services">
                Browse Services
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-green-400/60">
            <p>Need help? <Link to="/services" className="text-green-400 hover:text-green-300 underline">Contact Support</Link></p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
