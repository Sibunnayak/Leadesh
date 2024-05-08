import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation";
import AboutUs from "./Pages/AboutUs/AboutUS";
import Home from "./Pages/Home/Home";
import Faqs from "./Pages/FAQs/Faqs";
const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        {/* Define other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
