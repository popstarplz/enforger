
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedTemplates from '@/components/FeaturedTemplates';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <FeaturedTemplates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
