import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import FilterPage from "./pages/FilterPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/listings" element={<FilterPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
