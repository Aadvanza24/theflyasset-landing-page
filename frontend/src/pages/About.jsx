import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { values } from '../data/content';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="About Us" 
        title="About THE FLY ASSET"
        subtitle="Kolkata-based proprietary trading & research firm"
      />

      {/* Overview */}
      <Section className="bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            THE FLY ASSET is built by market professionals with over two decades of experience, including 
            significant exposure to commodity markets alongside equities and derivatives. We operate with a 
            research-first mindset and structured risk frameworks.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Our approach emphasizes discipline, continuous learning, and process-driven decision making across 
            multiple asset classes and market conditions.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section eyebrow="Mission" title="Our Mission">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-neutral-300 leading-relaxed">
            To develop sustainable trading frameworks through disciplined research, robust risk management, 
            and continuous learning.
          </p>
        </div>
      </Section>

      {/* Vision */}
      <Section eyebrow="Vision" title="Our Vision" className="bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-neutral-300 leading-relaxed">
            To build a professional, research-led trading environment that values integrity, process, 
            and responsible market participation.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="Our Values" title="What Drives Us">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value) => (
            <Card
              key={value.id}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      {/* Leadership Experience */}
      <Section 
        eyebrow="Leadership" 
        title="Experience Across Market Cycles"
        className="bg-neutral-950"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-neutral-400 leading-relaxed mb-8 text-center">
            The leadership team brings experience across market cycles, with hands-on exposure to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">Equity Markets</h3>
              <p className="text-neutral-400">Market structure analysis, sector trends, and systematic equity research frameworks.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">Derivatives</h3>
              <p className="text-neutral-400">Options strategies, volatility behavior, and risk-defined trading approaches.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">Commodities</h3>
              <p className="text-neutral-400">Global macro-linked commodity research influenced by supply-demand and policy dynamics.</p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">Risk Frameworks</h3>
              <p className="text-neutral-400">Structured risk controls, position sizing, and disciplined execution practices.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
