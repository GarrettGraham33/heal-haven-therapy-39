
import AnimatedSection from "./ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  className,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <AnimatedSection animation="scale-in" delay={delay} className={cn("glass-card p-8 rounded-xl", className)}>
      <div className="relative">
        <svg 
          className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-12 w-12 text-heal-green-300 opacity-50" 
          fill="currentColor" 
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative font-serif text-lg italic text-heal-charcoal-700 mb-6">
          "{quote}"
        </p>
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-heal-blue-100 flex items-center justify-center">
            <span className="text-heal-blue-700 font-medium text-sm">
              {author.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-heal-charcoal-900 font-medium">{author}</p>
            {role && <p className="text-heal-charcoal-500 text-sm">{role}</p>}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialCard;
