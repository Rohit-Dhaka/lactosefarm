import TrustPoints from "../components/TrustPoints";
import HowOrderingWorks from '../components/HowOrderingWorks'
import DeliveryAreas from '../components/DeliveryAreas'
import Testimonials from '../components/Testimonials'
import FinalCTA from '../components/FinalCTA'
import Hero from '../components/Hero'
import WhyLactoseFarm from '../components/WhyLactoseFarm'

const Home = ({
  cart,
  isCartOpen,
  setIsCartOpen,
  onAddToCart,
  onUpdateCartQty,
  onRemoveCartItem,
  onClearCart,
  totalCartCount,
}) => {
  return (
    <main>
      <Hero />
      <WhyLactoseFarm />
      <TrustPoints
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        onAddToCart={onAddToCart}
        onUpdateCartQty={onUpdateCartQty}
        onRemoveCartItem={onRemoveCartItem}
        onClearCart={onClearCart}
        totalCartCount={totalCartCount}
      />
      <HowOrderingWorks />
      <DeliveryAreas />
      <Testimonials />
      <FinalCTA />
      
    </main>
  );
};

export default Home;