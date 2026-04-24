'use client';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
}

export default function Hero({ title, subtitle, ctaLabel }: HeroProps): React.ReactElement {
  return (
    <section className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-32">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base sm:text-lg"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </button>
          <button
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base sm:text-lg"
            aria-label="Learn more about our services"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}