import React, { useState } from 'react';
import {
  TrendingUp,
  Briefcase,
  Wallet,
  LineChart,
  Shield,
  Users,
  Award,
  Lightbulb,
  Calendar,
  Target,
  ArrowRight,
  Star,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';
import { services, values, teamMembers, testimonials, faqs, stats } from '../mock';

const iconMap = {
  TrendingUp,
  Briefcase,
  Wallet,
  LineChart,
  Shield,
  Users,
  Award,
  Lightbulb,
  Calendar,
  Target
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2332] to-[#0a1628] text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1758518728641-8668e601cce1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHw0fHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MHx8fHwxNzcyNDc2NTg1fDA&ixlib=rb-4.1.0&q=85"
            alt="Professional Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Financial Liberty
              <span className="block text-[#D4AF37]">For You</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Empowering your wealth journey with personalized investment solutions and expert financial guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a1628] font-semibold px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0a1628] px-8 py-6 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={stat.id} className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <Icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                    <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</h3>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        {/* Feature Image */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1758518729841-308509f69a7f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MHx8fHwxNzcyNDc2NTg1fDA&ixlib=rb-4.1.0&q=85"
              alt="Financial Planning Team"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique investment goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#0a1628] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <CardTitle className="text-2xl text-[#0a1628]">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Values Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1592495989226-03f88104f8cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHx3ZWFsdGglMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc3MjQ3NjU4OXww&ixlib=rb-4.1.0&q=85"
            alt="Financial Growth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client success drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <div key={value.id} className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1628] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section - New Visual Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Data-driven insights combined with personalized strategies for optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Approach Card 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHx3ZWFsdGglMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc3MjQ3NjU4OXww&ixlib=rb-4.1.0&q=85"
                alt="Financial Analysis"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deep Research</h3>
                  <p className="text-white/80 text-sm">Comprehensive market analysis and data-driven insights</p>
                </div>
              </div>
            </div>

            {/* Approach Card 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MHx8fHwxNzcyNDc2NTg1fDA&ixlib=rb-4.1.0&q=85"
                alt="Strategic Planning"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Planning</h3>
                  <p className="text-white/80 text-sm">Customized investment strategies aligned with your goals</p>
                </div>
              </div>
            </div>

            {/* Approach Card 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MHx8fHwxNzcyNDc2NTg1fDA&ixlib=rb-4.1.0&q=85"
                alt="Client Partnership"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ongoing Partnership</h3>
                  <p className="text-white/80 text-sm">Continuous monitoring and optimization of your portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white relative">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc3MjQ3NjU4OXww&ixlib=rb-4.1.0&q=85"
            alt="Wealth Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A team of seasoned professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHx3ZWFsdGglMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc3MjQ3NjU4OXww&ixlib=rb-4.1.0&q=85"
            alt="Professional Consultation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hear from our clients about their journey to financial freedom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-[#D4AF37]">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.position}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-[#0a1628] font-semibold hover:text-[#D4AF37]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to start your wealth journey? Reach out to us today.
              </p>
            </div>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0a1628] hover:bg-[#1a2332] text-white font-semibold py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
