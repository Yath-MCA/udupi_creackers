import React from 'react';

type BrandIdentityProps = {
  align?: 'left' | 'center';
  size?: 'sm' | 'md';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
};

const BrandIdentity: React.FC<BrandIdentityProps> = ({
  align = 'left',
  size = 'md',
  showTagline = true,
  theme = 'light'
}) => {
  const isSmall = size === 'sm';
  const wrapperClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const titleClass = isSmall
    ? 'text-sm sm:text-base tracking-[0.12em]'
    : 'text-2xl sm:text-3xl tracking-[0.1em]';
  const subtitleClass = isSmall
    ? 'text-base sm:text-lg tracking-[0.2em]'
    : 'text-3xl sm:text-4xl tracking-[0.2em]';
  const taglineClass = isSmall ? 'text-[11px] sm:text-xs' : 'text-sm sm:text-base';

  const titleColor = theme === 'dark' ? 'text-indigo-100' : 'text-indigo-900';
  const subtitleColor = theme === 'dark' ? 'text-green-300' : 'text-green-500';
  const taglineColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-600';
  const iconWrapClass = theme === 'dark'
    ? 'bg-indigo-900/70 shadow-md ring-1 ring-indigo-300/30'
    : 'bg-white shadow-md ring-1 ring-indigo-100';

  return (
    <div className={`inline-flex gap-3 ${wrapperClass}`}>
      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${iconWrapClass}`}>
        <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800">
          <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300" />
          <span className="absolute -left-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-orange-400" />
          <span className="absolute -right-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-orange-400" />
          <span className="absolute left-1/2 -top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-400" />
          <span className="absolute bottom-0.5 left-1/2 h-2 w-0.5 -translate-x-1/2 rounded-full bg-emerald-300" />
        </div>
      </div>

      <div className="leading-tight">
        <p className={`font-sans font-black uppercase ${titleColor} ${titleClass}`}>
          SRI UDUPI KRISHNA
        </p>
        <p className={`font-sans font-extrabold uppercase ${subtitleColor} ${subtitleClass}`}>
          CRACKERS
        </p>
        {showTagline && (
          <p className={`italic ${taglineColor} ${taglineClass}`}>
            "The Divine Touch Behind Every Spark"
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandIdentity;
