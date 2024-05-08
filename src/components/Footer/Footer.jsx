import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import leadesh from "../../assets/Leadesh.png";
import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <footer className="py-10 border-t bg-gray-900 shadow-lg">
      <div className="flex flex-col lg:flex-row lg:mx-28 mx-10">
        {/* Company Information */}
        <div className="flex flex-col items-start mb-8  sm:mx-16 lg:w-1/3">
          <div className="mb-2.5 flex flex-row items-center">
            <img src={logo} loading="lazy" alt="" className="w-16 mr-4 rounded-xl" />
            <img src={leadesh} loading="lazy" alt="" className="w-20" />
          </div>

          <div className="text-sm mb-1 text-white lg:w-full md:w-2/3">
            Leadesh empowers you to select specific keywords that matter to you,
            and we'll notify you when these words appear in your WhatsApp
            conversations
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:-ml-9 md:px-14 gap-4 lg:gap-12 justify-center ">
          {/* Links */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-white">Links</div>
            <Link to="/" className="text-base text-white mb-1 hover:underline">
              Home
            </Link>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="text-base text-white mb-1 hover:underline"
            >
              Features
            </ScrollLink>
            <Link
              to="/about-us"
              className="text-base text-white mb-1 hover:underline"
            >
              About
            </Link>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              className="text-base text-white mb-1 hover:underline"
            >
              Pricing
            </ScrollLink>
            <Link to="/" className="text-base text-white mb-2 hover:underline">
              Download App
            </Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-white">
              Social Media
            </div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white mb-1 hover:underline"
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white mb-1 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white mb-1 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white mb-2 hover:underline"
            >
              Twitter
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold text-white mb-2.5">Legal</div>
            <Link
              to="/privacy-policy"
              className="text-base text-white mb-1 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-base text-white mb-1 hover:underline"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/support"
              className="text-base text-white mb-1 hover:underline"
            >
              Support
            </Link>
            <Link
              to="/contact-us"
              className="text-base text-white mb-1 hover:underline"
            >
              Contact Us
            </Link>
            <Link
              to="/refund-policy"
              className="text-base text-white mb-1 hover:underline"
            >
              Refund Policy
            </Link>
            <Link
              to="/shipping-and-delivery-policy"
              className="text-base text-white mb-2 hover:underline"
            >
              Shipping and Delivery Policy
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-gray-50 w-2/3 mx-auto my-5 opacity-10" />
      <div className="text-white text-center max-sm:text-xs text-sm mb-4 max-sm:mx-6">
        <p>
          © 2023 - 2024 Neonflake Enterprises OPC Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
