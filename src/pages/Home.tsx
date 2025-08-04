import { Blogs } from "../components/Blogs";
import { CityListings } from "../components/CityListings";
import { FAQSection } from "../components/FAQSeciton";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { PropertyListings } from "../components/PropertyListings";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      <PropertyListings />
      <CityListings />
      <Testimonials />
      <Services />
      <Newsletter />
      <Blogs />
      <FAQSection />
    </>
  );
};

export default Home;
