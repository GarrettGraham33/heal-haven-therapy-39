
import { Link } from "react-router-dom";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-heal-charcoal-50 border-t border-heal-charcoal-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-heal-charcoal-950 font-heading text-2xl font-semibold">
              Heal Counseling
            </Link>
            <p className="mt-4 text-heal-charcoal-600 text-sm leading-relaxed">
              Holistic counseling services focused on present-moment awareness and creating lasting transformation in your life.
            </p>
            <div className="mt-6 flex items-center text-heal-green-600">
              <Heart size={18} className="mr-2" />
              <span className="text-sm font-medium">Licensed Therapist</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-medium text-heal-charcoal-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  About Garrett
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  Counseling Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Other Ventures */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-medium text-heal-charcoal-900 mb-4">
              Other Ventures
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  Eagle Heart Retreats
                </a>
              </li>
              <li>
                <a href="#" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  Blue Lotus Energetics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-span-1">
            <h3 className="font-heading text-lg font-medium text-heal-charcoal-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-heal-green-600 mr-3 mt-0.5" />
                <span className="text-heal-charcoal-600 text-sm">
                  Healing Office Location
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-heal-green-600 mr-3 mt-0.5" />
                <a href="mailto:contact@healcounseling.com" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  contact@healcounseling.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-heal-green-600 mr-3 mt-0.5" />
                <a href="tel:555-123-4567" className="text-heal-charcoal-600 hover:text-heal-green-700 text-sm transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-heal-charcoal-100 text-center">
          <p className="text-heal-charcoal-500 text-sm">
            © {new Date().getFullYear()} Heal Counseling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
