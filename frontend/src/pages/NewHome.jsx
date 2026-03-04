import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, LineChart, Activity } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Button } from '../components/ui/button';
import { 
  markets, 
  philosophy, 
  processSteps, 
  researchBullets, 
  credibilityItems,
  insightsPreview 
} from '../data/content';

const NewHome = () => {
  const iconMap = {
    Equities: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
    Derivatives: <BarChart3 className="w-6 h-6 text-[#D4AF37]" />,
    Commodities: <LineChart className="w-6 h-6 text-[#D4AF37]" />,
    'Market Analytics': <Activity className="w-6 h-6 text-[#D4AF37]" />
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 mb-6 leading-tight">
              Research-Driven Trading.
              <span className="block text-[#D4AF37] mt-2">Disciplined Market Strategies.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              THE FLY ASSET is a proprietary trading and market research firm based in Kolkata, West Bengal, 
              led by professionals with 20+ years of experience across equities, derivatives, and commodity markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/capabilities">
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold px-8 py-6 text-lg"
                >
                  Explore Capabilities
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-700 text-neutral-100 hover:border-[#D4AF37] hover:text-[#D4AF37] px-8 py-6 text-lg bg-transparent"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {credibilityItems.map((item) => (
              <div key={item.id} className="text-center">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-400">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <Section eyebrow="Who We Are" title="Built on Experience. Driven by Research.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-400 leading-relaxed">
            We focus on structured market research, disciplined execution, and robust risk frameworks. 
            Our work emphasizes repeatable processes and long-term consistency.
          </p>
        </div>
      </Section>

      {/* Markets We Focus On */}
      <Section eyebrow="Coverage" title="Markets We Focus On" className="bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {markets.map((market) => (
            <Card
              key={market.id}
              title={market.title}
              description={market.description}
              icon={iconMap[market.title]}
            />
          ))}
        </div>
      </Section>

      {/* Trading Philosophy */}
      <Section eyebrow="Principles" title="Our Trading Philosophy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {philosophy.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Research & Technology */}
      <Section 
        eyebrow="Approach" 
        title="Research & Technology" 
        className="bg-neutral-950"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                We combine market insight with analytical frameworks—strategy testing, scenario evaluation, 
                and process-driven monitoring—to adapt to evolving market conditions.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {researchBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-neutral-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Preview */}
      <Section eyebrow="Workflow" title="Structured Trading Process">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a0a0b] text-xl font-bold mx-auto mb-3">
                    {step.id}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100 mb-1">{step.title}</h3>
                  <p className="text-xs text-neutral-500">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="text-neutral-700" size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/process">
              <Button
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 font-semibold px-6 py-3 border border-neutral-700"
              >
                View Full Process
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Insights Preview */}
      <Section eyebrow="Research Notes" title="Insights & Market Notes" className="bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {insightsPreview.map((insight) => (
            <Card key={insight.id} hover={true}>
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {insight.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">{insight.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{insight.excerpt}</p>
              <span className="text-sm text-neutral-500">Coming Soon</span>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/insights">
            <Button
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold px-6 py-3"
            >
              View All Insights
            </Button>
          </Link>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section title="Let's Connect">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-neutral-400 mb-8">
            For inquiries, collaborations, or research discussions, reach out.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#0a0a0b] font-semibold px-8 py-6 text-lg"
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default NewHome;
