import React from 'react';
import Section from '../../components/Section';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-24">
      <Section eyebrow="Legal" title="Disclaimer">
        <div className="max-w-4xl mx-auto prose prose-invert prose-neutral">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 space-y-6 text-neutral-300">
            <p className="leading-relaxed">
              THE FLY ASSET ("we", "our", "us") provides information on this website for general informational 
              and educational purposes only. Nothing on this website constitutes investment advice, financial advice, 
              trading advice, or any other form of advice, and it should not be relied upon as such.
            </p>

            <p className="leading-relaxed">
              We are <strong className="text-neutral-100">not soliciting funds</strong>, offering portfolio management services, or making any public 
              offer of securities through this website. Any references to markets, instruments, strategies, or research 
              are provided for general information and do not constitute a recommendation to buy, sell, or hold any 
              security or instrument.
            </p>

            <p className="leading-relaxed">
              Users should consult qualified financial professionals before making any financial decisions. By using this website, 
              you acknowledge that you are solely responsible for your investment and trading decisions.
            </p>

            <p className="leading-relaxed">
              THE FLY ASSET makes no representations or warranties regarding the accuracy, completeness, timeliness, 
              or reliability of the information presented. We are not liable for any loss or damage arising from the 
              use of this website or reliance on any information contained herein.
            </p>

            <p className="text-sm text-neutral-400 mt-8">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Disclaimer;
