import React from 'react';
import Section from '../../components/Section';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Section eyebrow="Legal" title="Risk Disclosure">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-6 text-gray-700">
            <p className="leading-relaxed">
              Trading and investing in financial markets involves <strong className="text-[#0a1628]">substantial risk</strong> and is not suitable 
              for all individuals. The value of financial instruments can fluctuate, and losses may exceed initial 
              capital in certain products such as derivatives.
            </p>

            <p className="leading-relaxed">
              Markets are influenced by a variety of factors including economic conditions, political developments, 
              liquidity, and volatility. <strong className="text-[#0a1628]">Past performance</strong>, if referenced anywhere, is not indicative 
              of future results.
            </p>

            <p className="leading-relaxed">
              You should carefully consider your financial situation, risk tolerance, and objectives before engaging 
              in any trading activity. You acknowledge that you understand the risks involved and agree that 
              THE FLY ASSET is not responsible for any trading or investment losses arising from decisions you make.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-amber-700">Important:</strong> This website does not constitute an offer or solicitation. 
                All content is for informational purposes only and should not be considered professional financial advice.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RiskDisclosure;
