import React from 'react';
import Section from '../components/Section';
import { processDetails } from '../data/content';

const Process = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="How We Work" 
        title="Our Trading Process"
        subtitle="Structured workflow designed for discipline and consistency"
      />

      {/* Process Visual */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/35118208/pexels-photo-35118208.jpeg?w=1200&q=80"
            alt="Stock Market Analysis Charts"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Process Steps */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          {processDetails.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a0a0b] text-2xl font-bold">
                  {step.id}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-100 mb-3">{step.title}</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">{step.description}</p>
                {index < processDetails.length - 1 && (
                  <div className="mt-6 h-12 w-0.5 bg-neutral-800 ml-8"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing Statement */}
      <Section>
        <div className="max-w-3xl mx-auto text-center bg-neutral-900/50 border border-neutral-800 rounded-xl p-12">
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            Our goal is <strong className="text-[#D4AF37]">repeatability and process quality</strong>—
          </p>
          <p className="text-lg text-neutral-400">
            because markets reward discipline over time.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Process;
