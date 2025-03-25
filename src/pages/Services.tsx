
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, HelpCircle, Target, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection
          title={<>Counseling <span className="text-heal-green-600">Services</span></>}
          subtitle="My therapeutic approach combines Gestalt therapy with holistic practices to address the mental, emotional, physical, and spiritual dimensions of wellbeing."
          ctaText="Book a Consultation"
          ctaLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80"
        />

        {/* Gestalt Therapy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slide-in-left">
                <div className="p-1.5 rounded-lg inline-block bg-gradient-to-r from-heal-green-600 to-heal-green-500 mb-6">
                  <span className="px-3 py-1 bg-white text-heal-green-700 rounded font-medium text-sm">
                    Gestalt Therapy
                  </span>
                </div>
                <h2 className="heading-lg text-heal-charcoal-900 mb-6">The Power of Present Moment Awareness</h2>
                <p className="paragraph text-heal-charcoal-600 mb-6">
                  As a Gestalt therapist, I work primarily with present moment awareness. Rather than extensively analyzing past events, we focus on how your history manifests in your current experience. This approach allows for immediate, transformative insights and lasting change.
                </p>
                <p className="paragraph text-heal-charcoal-600 mb-8">
                  In our sessions, we will work together to increase your awareness of thought patterns, emotional responses, and physical sensations. Through this awareness, you gain choice and freedom to respond differently to life's challenges.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-heal-blue-300/20 to-heal-green-300/20 opacity-70 blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80" 
                    alt="Orange flowers"
                    className="relative w-full h-auto rounded-2xl shadow-soft object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-heal-charcoal-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-heal-green-600 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">My Therapeutic Approach</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                My counseling approach is holistic, addressing the mental, emotional, physical, and spiritual dimensions of wellbeing. Whether you're facing specific challenges or seeking deeper self-understanding, I provide a safe, non-judgmental space for exploration and growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Session Format</h3>
                <p className="text-heal-charcoal-600 mb-6">
                  Initial sessions focus on building our relationship and understanding your unique situation. Together, we'll develop a therapeutic plan tailored to your specific needs and goals.
                </p>
                <p className="text-heal-charcoal-600">
                  Ongoing sessions typically last 50 minutes and are structured to maximize your growth and healing. I offer both in-person sessions and secure video sessions for those who prefer remote therapy.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Holistic Methods</h3>
                <p className="text-heal-charcoal-600 mb-6">
                  I integrate complementary approaches including mindfulness techniques, embodiment practices, and evidence-based therapeutic methods to create a comprehensive healing experience.
                </p>
                <p className="text-heal-charcoal-600">
                  These practices support deeper awareness, emotional regulation, and the development of new skills to navigate life's challenges more effectively.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Collaborative Process</h3>
                <p className="text-heal-charcoal-600 mb-6">
                  I view therapy as a collaborative journey. You are the expert on your experience, and I bring therapeutic expertise to help guide our work together.
                </p>
                <p className="text-heal-charcoal-600">
                  My role is to facilitate your process of self-discovery and growth, offering support, insights, and practical tools along the way.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Issues Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(163,210,216,0.1),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="h-8 w-8 text-heal-green-600 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">Issues I Work With</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                I specialize in helping clients address a wide range of challenges and life situations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
              <AnimatedSection delay={100} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Anxiety and Stress Management</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Learn effective techniques to manage anxiety, reduce stress, and cultivate inner calm.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={150} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Depression and Mood Disorders</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Discover pathways to emotional balance and renewed engagement with life.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Addiction and Recovery</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Support for navigating the journey of recovery and building a fulfilling life beyond addiction.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={250} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Life Transitions and Personal Growth</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Guidance during times of change, helping you navigate transitions with clarity and purpose.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Relationship Challenges</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Develop healthy relationship patterns and improve communication skills.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Trauma Healing</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Compassionate, trauma-informed care to help you process and integrate difficult experiences.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Spiritual Integration</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Exploration of meaning, purpose, and spiritual dimensions of your experience.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={450} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                  <Check className="h-4 w-4 text-heal-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-heal-charcoal-900 mb-1">Mind-Body Connection</h3>
                  <p className="text-heal-charcoal-600 text-sm">
                    Learn to recognize and work with the connection between physical sensations and emotional states.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-heal-charcoal-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-heal-green-600 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">Frequently Asked Questions</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                Find answers to common questions about my counseling services.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection delay={100} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">How long does therapy typically last?</h3>
                <p className="text-heal-charcoal-600">
                  The duration of therapy varies based on individual needs and goals. Some clients find significant benefit from short-term work (8-12 sessions), while others prefer ongoing therapy for deeper exploration and growth. We'll discuss your needs during our initial consultation and regularly review your progress.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">Do you accept insurance?</h3>
                <p className="text-heal-charcoal-600">
                  I am an out-of-network provider for insurance plans. I can provide you with a superbill that you can submit to your insurance for potential reimbursement. Some clients choose to use Health Savings Accounts (HSA) or Flexible Spending Accounts (FSA) to pay for therapy.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">What can I expect in the first session?</h3>
                <p className="text-heal-charcoal-600">
                  The initial session is primarily focused on getting to know each other and discussing your current challenges and goals for therapy. I'll explain more about my approach and answer any questions you have. This session helps us determine if we're a good fit for working together and begin to develop a therapeutic plan.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={250} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-3">How often will we meet?</h3>
                <p className="text-heal-charcoal-600">
                  Most clients begin with weekly sessions to establish momentum in the therapeutic process. As you progress, we may adjust the frequency to biweekly or monthly sessions. The schedule is flexible and can be adapted to best support your needs and circumstances.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-heal-green-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="heading-lg text-white mb-6">Ready to Take the First Step?</h2>
                <p className="paragraph text-heal-green-100 mb-8">
                  If you're ready to begin your healing journey, I'm here to support you. Schedule your initial consultation to discuss how we can work together to meet your needs.
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

export default Services;
