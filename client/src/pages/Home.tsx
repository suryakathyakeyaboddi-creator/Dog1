import Navigation from '@/components/Navigation';
import DetectorSection from '@/components/DetectorSection';
import PawsPonder from '@/components/PawsPonder';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DetectorSection />
      <PawsPonder />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
