
import React, { useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, isSubmitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormData((prev) => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: ""
      }));
      
      toast.success("Your message has been sent successfully! We'll be in touch soon.");
    }, 1500);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection
          title={<>Contact & <span className="text-heal-green-600">Booking</span></>}
          subtitle="I'm here to help you begin your healing journey. Reach out to schedule an initial consultation or ask any questions about my services."
          centered={true}
          ctaText="See Office Location"
          ctaLink="#location"
        />

        {/* Contact Form Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimatedSection animation="slide-in-left">
                <div className="p-1.5 rounded-lg inline-block bg-gradient-to-r from-heal-green-600 to-heal-green-500 mb-6">
                  <span className="px-3 py-1 bg-white text-heal-green-700 rounded font-medium text-sm">
                    Get in Touch
                  </span>
                </div>
                <h2 className="heading-lg text-heal-charcoal-900 mb-6">Schedule a Consultation</h2>
                <p className="paragraph text-heal-charcoal-600 mb-8">
                  Fill out the form below to schedule an initial consultation or inquire about my services. I'll respond within 24-48 hours to discuss next steps.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-heal-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Email</p>
                      <a href="mailto:contact@healcounseling.com" className="text-heal-charcoal-600 hover:text-heal-green-700 transition-colors">
                        contact@healcounseling.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-heal-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-heal-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-heal-charcoal-900">Phone</p>
                      <a href="tel:555-123-4567" className="text-heal-charcoal-600 hover:text-heal-green-700 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-heal-charcoal-50 p-6 rounded-lg border border-heal-charcoal-100">
                  <h3 className="font-medium text-heal-charcoal-900 mb-2">Emergency Resources</h3>
                  <p className="text-heal-charcoal-600 text-sm mb-4">
                    If you're experiencing a mental health emergency, please use these resources:
                  </p>
                  <ul className="space-y-2 text-sm text-heal-charcoal-600">
                    <li>• National Suicide Prevention Lifeline: <a href="tel:988" className="text-heal-green-700 font-medium">988</a></li>
                    <li>• Crisis Text Line: Text HOME to <span className="text-heal-green-700 font-medium">741741</span></li>
                    <li>• Emergency Services: <a href="tel:911" className="text-heal-green-700 font-medium">911</a></li>
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                  {formData.isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="h-16 w-16 rounded-full bg-heal-green-100 flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-heal-green-600" />
                      </div>
                      <h3 className="heading-md text-heal-charcoal-900 mb-4">Thank You!</h3>
                      <p className="text-heal-charcoal-600 mb-6">
                        Your message has been sent successfully. I'll be in touch with you shortly to schedule your consultation.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, isSubmitted: false }))}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-heal-charcoal-900 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-heal-charcoal-200 focus:outline-none focus:ring-2 focus:ring-heal-green-500 focus:border-transparent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-heal-charcoal-900 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-heal-charcoal-200 focus:outline-none focus:ring-2 focus:ring-heal-green-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-heal-charcoal-900 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-heal-charcoal-200 focus:outline-none focus:ring-2 focus:ring-heal-green-500 focus:border-transparent transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-heal-charcoal-900 mb-1">
                          Reason for Contact
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-heal-charcoal-200 focus:outline-none focus:ring-2 focus:ring-heal-green-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a reason</option>
                          <option value="initial-consultation">Schedule Initial Consultation</option>
                          <option value="service-inquiry">Question About Services</option>
                          <option value="appointment">Schedule/Reschedule Appointment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-heal-charcoal-900 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-md border border-heal-charcoal-200 focus:outline-none focus:ring-2 focus:ring-heal-green-500 focus:border-transparent transition-colors"
                          placeholder="Please share any specific concerns or questions you have..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={formData.isSubmitting}
                        className="w-full btn-primary flex items-center justify-center"
                      >
                        {formData.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section id="location" className="py-24 bg-heal-charcoal-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-heal-green-600 mr-2" />
                <h2 className="heading-lg text-heal-charcoal-900">Office Location</h2>
              </div>
              <p className="paragraph text-heal-charcoal-600">
                I offer both in-person sessions at my office and secure video sessions for those who prefer remote therapy.
              </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="scale-in">
                <div className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                      <h3 className="heading-sm text-heal-charcoal-900 mb-4">Office Address</h3>
                      <p className="text-heal-charcoal-600 mb-6">
                        123 Healing Avenue<br />
                        Suite 456<br />
                        Wellness City, ST 12345
                      </p>
                      
                      <h3 className="heading-sm text-heal-charcoal-900 mb-4">Office Hours</h3>
                      <ul className="space-y-2 text-heal-charcoal-600">
                        <li className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Friday</span>
                          <span>9:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday - Sunday</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="relative h-[300px] rounded-lg overflow-hidden bg-heal-charcoal-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-heal-charcoal-500 text-center px-6">
                            Map placeholder - would display an embedded map of the office location
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Payment & Insurance */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(163,210,216,0.1),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="heading-lg text-heal-charcoal-900 mb-6">Payment & Insurance</h2>
              <p className="paragraph text-heal-charcoal-600">
                Information about fees, accepted payment methods, and insurance options.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection delay={100} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-4">Session Fees</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-heal-charcoal-100">
                    <span className="font-medium">Initial Consultation (60 min)</span>
                    <span className="text-heal-charcoal-900">$150</span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-heal-charcoal-100">
                    <span className="font-medium">Individual Session (50 min)</span>
                    <span className="text-heal-charcoal-900">$130</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Extended Session (80 min)</span>
                    <span className="text-heal-charcoal-900">$190</span>
                  </li>
                </ul>
                <p className="text-heal-charcoal-500 text-sm mt-6">
                  * Sliding scale fees may be available based on financial need.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-xl border border-heal-charcoal-100 shadow-soft">
                <h3 className="heading-sm text-heal-charcoal-900 mb-4">Insurance & Payment</h3>
                <p className="text-heal-charcoal-600 mb-6">
                  I am an out-of-network provider for insurance plans. I can provide you with a superbill that you can submit to your insurance for potential reimbursement.
                </p>
                <p className="text-heal-charcoal-600 mb-6">
                  Payment is due at the time of service. I accept:
                </p>
                <ul className="space-y-2 text-heal-charcoal-600 mb-6">
                  <li>• Credit and debit cards</li>
                  <li>• Health Savings Accounts (HSA)</li>
                  <li>• Flexible Spending Accounts (FSA)</li>
                  <li>• Cash or check</li>
                </ul>
                <p className="text-heal-charcoal-600">
                  Please contact your insurance provider to inquire about out-of-network coverage for mental health services.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
