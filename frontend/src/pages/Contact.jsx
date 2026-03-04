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
    <div className="min-h-screen bg-[#0a0a0b] pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="Get In Touch" 
        title="Contact"
        subtitle="Kolkata, West Bengal, India"
      />

      <Section className="bg-neutral-950">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Let's Connect</h3>
            <p className="text-neutral-400 leading-relaxed mb-8">
              For general inquiries, collaborations, or research discussions, contact us using the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-1">Location</h4>
                  <p className="text-neutral-400">Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-100 mb-1">Email</h4>
                  <p className="text-neutral-400 text-sm">Contact details will be updated shortly</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-neutral-900/30 border border-neutral-800 rounded-lg p-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                <strong className="text-neutral-300">Note:</strong> We respond to legitimate business inquiries within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold py-6 text-lg"
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
