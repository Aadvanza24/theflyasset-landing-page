import React from 'react';

const Section = ({ children, title, subtitle, eyebrow, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {eyebrow && (
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-3 font-semibold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
