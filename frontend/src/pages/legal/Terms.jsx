import React from 'react';
import Section from '../../components/Section';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-24">
      <Section eyebrow="Legal" title="Terms of Use">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 space-y-8 text-neutral-300">
            <p className="leading-relaxed">
              By accessing and using this website, you agree to these Terms of Use.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Use of Website</h3>
              <p className="text-neutral-400 leading-relaxed">
                You agree to use the website for lawful purposes only and not to engage in any activity that may 
                damage, disrupt, or misuse the website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">No Advice</h3>
              <p className="text-neutral-400 leading-relaxed">
                Content on this website is for <strong className="text-neutral-100">informational purposes only</strong> and does not constitute 
                financial or investment advice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Intellectual Property</h3>
              <p className="text-neutral-400 leading-relaxed">
                All content, branding, and materials on this website are owned by THE FLY ASSET unless otherwise stated. 
                You may not copy, reproduce, or distribute content without permission.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Limitation of Liability</h3>
              <p className="text-neutral-400 leading-relaxed">
                THE FLY ASSET is not liable for any direct or indirect losses arising from your use of the website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Changes</h3>
              <p className="text-neutral-400 leading-relaxed">
                We may update these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-6 mt-8">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <strong className="text-[#D4AF37]">Questions about these terms?</strong> Please contact us through the Contact page.
              </p>
            </div>

            <p className="text-sm text-neutral-400 mt-8">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
