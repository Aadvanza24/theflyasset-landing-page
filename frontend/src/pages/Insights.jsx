import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { insightsPosts } from '../data/content';

const Insights = () => {
  const categories = [
    'All',
    'Risk Management',
    'Derivatives & Volatility',
    'Commodities',
    'Market Behaviour'
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? insightsPosts 
    : insightsPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <Section 
        eyebrow="Research & Learning" 
        title="Insights"
        subtitle="Notes on market structure, risk, derivatives, and commodities"
      />

      {/* Feature Image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?w=1200&q=80"
            alt="Stock Market Data Display"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#0a1628] text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4AF37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <Card key={post.id} hover={true}>
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}
      </Section>

      {/* Compliance Note */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600">
              <strong className="text-[#0a1628]">Note:</strong> All content is for educational and informational purposes only.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Insights;
