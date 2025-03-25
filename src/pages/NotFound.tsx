
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
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
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-heal-charcoal-50 px-6">
        <div className="max-w-lg w-full text-center">
          <div className="h-24 w-24 bg-gradient-to-br from-heal-green-400 to-heal-blue-400 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="heading-lg text-heal-charcoal-900 mb-4">Page Not Found</h1>
          <p className="paragraph text-heal-charcoal-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center btn-primary justify-center">
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center btn-secondary justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
