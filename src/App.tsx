import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PropertyListings } from "./components/PropertyListings";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropertyListings />
    </div>
  );
};

export default App;
