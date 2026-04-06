import React, { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import Section from '../components/Section';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      title: "Message Received",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="Get In Touch" 
        title="Contact"
        subtitle="Kolkata, West Bengal, India"
      />

      {/* Feature Image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?w=1400&q=80"
            alt="Professional Office Space"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0a1628] mb-6">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              For general inquiries, collaborations, or research discussions, contact us using the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0a1628] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    90 Degree Magnus, EP Block - 90,<br />
                    Room No. 701, 7th Floor, Street No. 15,<br />
                    Sector - V, Bidhannagar,<br />
                    Kolkata 700091, WB.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0a1628] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0a1628] mb-1">Email</h4>
                  <a href="mailto:info@theflyasset.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200">
                    info@theflyasset.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#0a1628]">Note:</strong> We respond to legitimate business inquiries within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                    placeholder="What is this regarding?"
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
                    className="bg-white border-gray-300 text-gray-900"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0a1628] hover:bg-[#1a2332] text-white font-semibold py-6 text-lg shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
