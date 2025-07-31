import { CityListings } from "./components/CityListings";
import { FAQSection } from "./components/FAQSeciton";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { PropertyListings } from "./components/PropertyListings";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropertyListings />
      <CityListings />
      <Testimonials />
      <Services />
      <Newsletter />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
