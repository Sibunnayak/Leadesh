import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import HowitWorks from "./components/HowitWorks/HowitWorks";
import WhatsAppCRM from "./components/WhatsAppCRM/WhatsappCRM";
import Navigation from "./components/Header/Navigation";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define other routes here */}
      </Routes>
      <WhatsAppCRM />
      <HowitWorks />
      <Pricing />
      <Footer />
    </Router>
  );
};

export default App;



