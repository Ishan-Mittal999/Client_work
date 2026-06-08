import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Hero from './components/sections/Hero';
import FeaturedProducts from './components/sections/FeaturedProducts';
import About from './components/sections/About';
import SignatureDrinks from './components/sections/SignatureDrinks';
import Reviews from './components/sections/Reviews';
import Gallery from './components/sections/Gallery';
import WhyChooseUs from './components/sections/WhyChooseUs';
import AppPromo from './components/sections/AppPromo';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Loader />
        <ScrollProgress />
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <FeaturedProducts />
          <About />
          <SignatureDrinks />
          <Reviews />
          <Gallery />
          <WhyChooseUs />
          <AppPromo />
          <Contact />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}
