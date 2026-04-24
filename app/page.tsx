import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Header ariaLabel="Main navigation header" />
      <Hero
        title="Welcome to Our Platform"
        subtitle="Experience the future of web applications with modern design and seamless user experience"
        ctaLabel="Get Started"
      />
      <Footer ariaLabel="Footer navigation and information" />
    </div>
  );
}