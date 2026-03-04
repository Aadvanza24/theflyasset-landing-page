import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import { capabilities } from '../data/content';

const Capabilities = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="What We Do" 
        title="Capabilities"
        subtitle="Research, frameworks, and disciplined market execution"
      />

      {/* Capability Blocks */}
      <Section className="bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability) => (
            <Card
              key={capability.id}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </Section>

      {/* What We Don't Do - Trust Section */}
      <Section 
        eyebrow="Transparency" 
        title="What We Don't Do"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">No Performance Claims</h3>
                <p className="text-neutral-400">
                  We do not publish performance claims or historical returns on this website.
                </p>
              </div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">No Investment Advice</h3>
                <p className="text-neutral-400">
                  We do not provide investment advice or recommendations through this site.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 text-center">
            <p className="text-sm text-neutral-400 leading-relaxed">
              All content on this website is for <strong className="text-neutral-300">educational and informational purposes only</strong>. 
              We are not soliciting funds or making any public offer through this platform.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Capabilities;
