import React from 'react';

const Card = ({ title, description, icon, children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 backdrop-blur-sm ${
        hover ? 'hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/5' : ''
      } transition-all duration-300 ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-neutral-100 mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-neutral-400 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;
