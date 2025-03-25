
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./ui/AnimatedSection";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  centered?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "/about",
  imageUrl = "/placeholder.svg",
  imageAlt = "Hero image",
  centered = false
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-heal-green-50/50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,197,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,210,216,0.1),transparent_50%)]" />
      </div>
      
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className={`grid grid-cols-1 ${centered ? "" : "lg:grid-cols-2"} gap-12 items-center`}>
          <AnimatedSection animation="slide-in-left" className={centered ? "text-center mx-auto max-w-3xl" : ""}>
            <h1 className="heading-xl mb-6">{title}</h1>
            <p className="paragraph-lg text-heal-charcoal-600 mb-8 max-w-2xl">
              {subtitle}
            </p>
            <Link 
              to={ctaLink}
              className="inline-flex items-center btn-primary"
            >
              {ctaText} <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
          
          {!centered && (
            <AnimatedSection animation="slide-in-right" delay={300} className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-heal-green-300/30 to-heal-blue-300/30 opacity-70 blur-xl"></div>
                <img 
                  src={imageUrl} 
                  alt={imageAlt}
                  className="relative w-full h-auto rounded-2xl shadow-soft object-cover aspect-[5/6]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
