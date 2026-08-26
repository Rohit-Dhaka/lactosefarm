import DeliveryAreas from "../components/DeliveryAreas";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import HowOrderingWorks from "../components/HowOrderingWorks";
import Testimonials from "../components/Testimonials";
import TrustPoints from "../components/TrustPoints";
import WhyLactoseFarm from "../components/WhyLactoseFarm";

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustPoints />      
      <WhyLactoseFarm />
      <HowOrderingWorks />
      <DeliveryAreas />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Home;
