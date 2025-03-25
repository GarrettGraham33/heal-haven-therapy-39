
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Heart, Leaf } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection
          title={<>About <span className="text-heal-green-600">Garrett Graham</span></>}
          subtitle="My journey to becoming a therapist began through my own experiences with suffering, leading me to discover the power of present-moment awareness and holistic healing."
          ctaText="Book a Consultation"
          ctaLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
        />

        {/* Personal Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="p-1.5 rounded-lg inline-block bg-gradient-to-r from-heal-green-600 to-heal-green-500 mb-6">
                  <span className="px-3 py-1 bg-white text-heal-green-700 rounded font-medium text-sm">
                    My Journey
                  </span>
                </div>
                <h2 className="heading-lg text-heal-charcoal-900 mb-6">A Path of Transformation</h2>
                <p className="paragraph text-heal-charcoal-600 mb-6">
                  My name is Garrett Graham, founder of Heal Counseling. My journey to becoming a therapist began 15 years ago through my own experiences with suffering, including addiction, depression, and suicidality. Through this personal transformation, I discovered the power of present-moment awareness and holistic healing.
                </p>
                <p className="paragraph text-heal-charcoal-600 mb-8">
                  These experiences shaped my approach to therapy and my deep commitment to helping others find their own path to healing and wholeness. I believe that our greatest challenges often contain the seeds of our most profound growth.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-heal-green-300/20 to-heal-blue-300/20 opacity-70 blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80" 
                    alt="Forest with yellow lights"
                    className="relative w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-24 bg-heal-charcoal-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-heal-green-600 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">Training & Credentials</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                My professional training combines traditional therapeutic approaches with complementary modalities for a truly holistic practice.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection delay={100} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-heal-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Master's Degree in Clinical Counseling</p>
                      <p className="text-heal-charcoal-600 text-sm">Prestigious University, 2015</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-heal-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Gestalt Therapy Certification</p>
                      <p className="text-heal-charcoal-600 text-sm">Gestalt Institute, 2016</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-heal-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Trauma-Informed Care Training</p>
                      <p className="text-heal-charcoal-600 text-sm">Trauma Healing Center, 2018</p>
                    </div>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Complementary Training</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-blue-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <Leaf className="h-5 w-5 text-heal-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Yoga Teacher Training</p>
                      <p className="text-heal-charcoal-600 text-sm">200-hour certification</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-blue-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <Leaf className="h-5 w-5 text-heal-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Qigong Practitioner</p>
                      <p className="text-heal-charcoal-600 text-sm">Advanced certification</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="h-10 w-10 rounded-full bg-heal-blue-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <Leaf className="h-5 w-5 text-heal-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Mindfulness Meditation Facilitator</p>
                      <p className="text-heal-charcoal-600 text-sm">Mindfulness Training Institute</p>
                    </div>
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(163,210,216,0.1),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-heal-blue-300/20 to-heal-green-300/20 opacity-70 blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" 
                    alt="Serene lake surrounded by trees"
                    className="relative w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="p-1.5 rounded-lg inline-block bg-gradient-to-r from-heal-green-600 to-heal-green-500 mb-6">
                  <span className="px-3 py-1 bg-white text-heal-green-700 rounded font-medium text-sm">
                    My Philosophy
                  </span>
                </div>
                <h2 className="heading-lg text-heal-charcoal-900 mb-6">Holistic Healing Approach</h2>
                <p className="paragraph text-heal-charcoal-600 mb-6">
                  As a Gestalt therapist, I believe in the power of present moment awareness as the pathway to healing. Rather than extensively analyzing past events, we focus on how your history manifests in your current experience, allowing for immediate, transformative insights and lasting change.
                </p>
                <p className="paragraph text-heal-charcoal-600 mb-8">
                  It is my highest goal in working with you to help you achieve greater awareness, emotional freedom, and authentic living. I provide a safe, non-judgmental space where you can explore challenges, discover new possibilities, and create meaningful change in your life.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/services" className="inline-flex items-center btn-primary">
                    Explore My Services <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center btn-secondary">
                    Contact Me
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-heal-blue-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <div className="flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white opacity-80 mr-2" />
                  <h2 className="heading-lg text-white">Ready to Begin Your Journey?</h2>
                </div>
                <p className="paragraph text-heal-blue-100 mb-8">
                  I'm committed to helping you achieve greater awareness, emotional freedom, and authentic living. Let's work together to create the change you're seeking.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 bg-white text-heal-blue-700 hover:bg-heal-blue-50 rounded-md shadow-sm transition-all duration-300 font-medium">
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

export default About;
