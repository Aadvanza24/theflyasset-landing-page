import React from 'react';
import Section from '../../components/Section';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Section eyebrow="Legal" title="Privacy Policy">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-8 text-gray-700">
            <p className="leading-relaxed">
              THE FLY ASSET respects your privacy. This policy explains how we collect, use, and protect information 
              when you use our website.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Information We May Collect</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Information you submit via contact forms (e.g., name, email, subject, message)</li>
                <li>Basic technical information (e.g., browser type, device information, approximate location, pages visited) 
                    through standard analytics and logs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">How We Use Information</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-400">
                <li>To respond to inquiries</li>
                <li>To improve website performance and content</li>
                <li>To maintain security and prevent misuse</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Cookies</h3>
              <p className="text-neutral-400 leading-relaxed">
                We may use cookies or similar technologies for basic site functionality and analytics. 
                You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Data Sharing</h3>
              <p className="text-neutral-400 leading-relaxed">
                We do not sell personal information. We may share data only when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Data Security</h3>
              <p className="text-neutral-400 leading-relaxed">
                We take reasonable steps to protect information, but no method of transmission over the internet is fully secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-3">Contact</h3>
              <p className="text-neutral-400 leading-relaxed">
                For privacy-related requests, contact details will be provided on the Contact page once published.
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

export default PrivacyPolicy;
