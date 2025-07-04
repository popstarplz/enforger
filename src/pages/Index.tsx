
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
