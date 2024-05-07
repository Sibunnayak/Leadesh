import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer
      className="py-8 border-t bg-gray-900 shadow-lg"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(249, 248, 248, 0.07), 0 1px 2px 0 rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-evenly">
        {/* Company Information */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <div className="mb-2.5 flex flex-row items-center">
            <img src={logo} loading="lazy" alt="" className="w-16 mr-4" />
            <div className="text-xl text-white">Leadesh</div>
          </div>

          <div className="text-sm mb-1 text-white">
            San Francisco, California
          </div>
          <div className="text-sm mb-1 text-white">94104-5401 US</div>
        </div>

        {/* Products */}
        <div className="flex flex-col max-md:ml-6">
          <div className="text-xl font-bold mb-2.5 text-white">Products</div>
          <Link
            to="/hubspot"
            className="text-base text-white mb-1 hover:underline"
          >
            HubSpot Integration
          </Link>
          <Link
            to="/salesforce"
            className="text-base text-white mb-1 hover:underline"
          >
            Salesforce Integration
          </Link>
          <Link
            to="/pricing"
            className="text-base text-white mb-1 hover:underline"
          >
            Pricing
          </Link>
          <Link
            to="/why-cooby"
            className="text-base text-white mb-1 hover:underline"
          >
            Why Cooby
          </Link>
          <Link
            to="/syncing-guide"
            className="text-base text-white mb-2 hover:underline"
          >
            Syncing Guide
          </Link>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col max-md:ml-6">
          <div className="text-xl font-bold mb-2.5 text-white">Contact Us</div>
          <Link
            to="/email-support"
            className="text-base text-white mb-1 hover:underline"
          >
            Email Support
          </Link>
          <Link
            to="/facebook"
            className="text-base text-white mb-1 hover:underline"
          >
            Facebook
          </Link>
          <Link
            to="/twitter"
            className="text-base text-white mb-1 hover:underline"
          >
            X (formerly Twitter)
          </Link>
          <Link
            to="/linkedin"
            className="text-base text-white mb-2 hover:underline"
          >
            LinkedIn
          </Link>
        </div>

        {/* Company */}
        <div className="flex flex-col max-md:ml-6">
          <div className="text-xl font-bold text-white mb-2.5">Company</div>
          <Link
            to="/terms-conditions"
            className="text-base text-white mb-1 hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="text-base text-white mb-1 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/master-service-agreement"
            className="text-base text-white mb-1 hover:underline"
          >
            Master Service Agreement
          </Link>
          <Link
            to="/sla-guideline"
            className="text-base text-white mb-1 hover:underline"
          >
            SLA Guideline
          </Link>
          <Link
            to="/careers"
            className="text-base text-white mb-2 hover:underline"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
