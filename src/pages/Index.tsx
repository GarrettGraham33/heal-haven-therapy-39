
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Leaf, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection
          title={<>Welcome to <span className="text-heal-green-600">Heal Counseling</span></>}
          subtitle="I'm Garrett Graham, a licensed therapist specializing in Gestalt therapy—a powerful approach that focuses on present moment awareness to create lasting transformation."
          ctaText="Book a Consultation"
          ctaLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80"
        />

        {/* Introduction Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg text-heal-charcoal-900 mb-6">My Holistic Approach to Therapy</h2>
              <p className="paragraph text-heal-charcoal-600">
                My practice combines clinical expertise with a holistic understanding of human experience to help you achieve greater clarity, emotional freedom, and authentic living.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <div className="h-12 w-12 rounded-full bg-heal-green-100 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-heal-green-600" />
                </div>
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Compassionate Care</h3>
                <p className="text-heal-charcoal-600">
                  I provide a safe, non-judgmental space where you can explore challenges, discover new possibilities, and create meaningful change in your life.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <div className="h-12 w-12 rounded-full bg-heal-green-100 flex items-center justify-center mb-6">
                  <Leaf className="h-6 w-6 text-heal-green-600" />
                </div>
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Holistic Healing</h3>
                <p className="text-heal-charcoal-600">
                  My approach integrates mental, emotional, physical, and spiritual dimensions to address the whole person, not just isolated symptoms.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <div className="h-12 w-12 rounded-full bg-heal-green-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-heal-green-600" />
                </div>
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Evidence-Based</h3>
                <p className="text-heal-charcoal-600">
                  I combine proven therapeutic techniques with innovative approaches, tailored to your unique needs and circumstances.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Gestalt Section */}
        <section className="py-24 bg-heal-charcoal-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-heal-blue-300/20 to-heal-green-300/20 opacity-70 blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                    alt="Forest with sunlight"
                    className="relative w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="p-1.5 rounded-lg inline-block bg-gradient-to-r from-heal-green-600 to-heal-green-500 mb-6">
                  <span className="px-3 py-1 bg-white text-heal-green-700 rounded font-medium text-sm">
                    Gestalt Therapy
                  </span>
                </div>
                <h2 className="heading-lg text-heal-charcoal-900 mb-6">Present Moment Awareness</h2>
                <p className="paragraph text-heal-charcoal-600 mb-6">
                  As a Gestalt therapist, I work primarily with present moment awareness. Rather than extensively analyzing past events, we focus on how your history manifests in your current experience. This approach allows for immediate, transformative insights and lasting change.
                </p>
                <p className="paragraph text-heal-charcoal-600 mb-8">
                  In our sessions, we will work together to increase your awareness of thought patterns, emotional responses, and physical sensations. Through this awareness, you gain choice and freedom to respond differently to life's challenges.
                </p>
                <Link to="/services" className="inline-flex items-center btn-primary">
                  Learn More About My Approach <ArrowRight size={18} className="ml-2" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(163,210,216,0.1),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-heal-yellow-500 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">Client Experiences</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                I'm honored to have helped clients on their journey to healing and growth. Here are some of their experiences.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Working with Garrett has been transformative. His Gestalt approach helped me connect with myself in ways I never thought possible."
                author="Sarah M."
                role="Client for 6 months"
                delay={100}
              />
              <TestimonialCard 
                quote="I've tried other therapists before, but Garrett's holistic approach addressed aspects of my life that had been neglected. I feel whole again."
                author="Michael K."
                role="Client for 1 year"
                delay={200}
              />
              <TestimonialCard 
                quote="The focus on present-moment awareness gave me tools I use every day. I'm more calm, centered, and equipped to handle life's challenges."
                author="Jamie L."
                role="Client for 8 months"
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-heal-green-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="heading-lg text-white mb-6">Begin Your Healing Journey Today</h2>
                <p className="paragraph text-heal-green-100 mb-8">
                  I provide a safe, non-judgmental space where you can explore challenges, discover new possibilities, and create meaningful change in your life.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-heal-green-700 hover:bg-heal-green-50 rounded-md shadow-sm transition-all duration-300 font-medium">
                  Schedule Your Consultation
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
