import React from 'react';

const Card = ({ title, description, icon, children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${
        hover ? 'hover:border-[#D4AF37] hover:shadow-md' : ''
      } transition-all duration-300 ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-[#0a1628] mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;
