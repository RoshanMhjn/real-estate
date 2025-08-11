import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import FilterPage from "./pages/FilterPage";
import { RegisterPropertyForm } from "./components/forms/RegisterPropertyForm";
import RegisterForm from "./components/forms/auth/RegisterForm";
import { EMICalculator } from "./pages/EMICalculator";
import LoginForm from "./components/forms/auth/LoginForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/listings" element={<FilterPage />} />
          <Route path="/register" element={<RegisterPropertyForm />} />
          <Route path="auth/register" element={<RegisterForm />} />
          <Route path="auth/login" element={<LoginForm />} />
          <Route path="/EMICalculator" element={<EMICalculator />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
