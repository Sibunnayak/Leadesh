import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation";
import AboutUs from "./Pages/AboutUs/AboutUS";
import Home from "./Pages/Home/Home";
import Faqs from "./Pages/FAQs/Faqs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsandConditions from "./Pages/TermsandConditions/TermsandConditions";
import Support from "./Pages/Support/Support";
import ContactUs from "./Pages/ContactUs/ContactUs";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import ShippingandDeliveryPolicy from "./Pages/ShippingandDeliveryPolicy/ShippingandDeliveryPolicy";
const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsandConditions />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route
          path="/shipping-and-delivery-policy"
          element={<ShippingandDeliveryPolicy />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
