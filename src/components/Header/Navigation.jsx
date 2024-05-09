import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import leadesh from "../../assets/Leadesh.png";
import hamburger from "../../assets/Hamburger.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
    document.body.style.overflow = showNavLinks ? "auto" : "hidden"; // Toggle body overflow
  };

  return (
    <div className="mx-auto overflow-x-hidden max-w-screen-2xl relative">
      <div className="sticky top-0 bg-gray-900 w-full flex justify-between items-center lg:px-28 px-7 py-2 text-white">
        <div className="flex items-center">
          <Link to="/" className="logo flex items-center">
            <img src={logo} alt="logo" className="h-16 p-1 mr-1 rounded-xl" />
            <img src={leadesh} loading="lazy" alt="" className="w-20" />
          </Link>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div className="xl:hidden cursor-pointer" onClick={toggleNavLinks}>
            <img src={hamburger} alt="Hamburger Icon" width={40} />
          </div>
          <div className="hidden xl:flex xl:items-center">
            <Link
              to="/"
              className="text-lg text-white px-4 py-2 hover:scale-110 transition-transform"
            >
              Home
            </Link>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="text-lg text-white px-4 py-2 hover:scale-110 transition-transform"
            >
              Features
            </ScrollLink>
            <Link
              to="/about-us"
              className="text-lg text-white px-4 py-2 hover:scale-110 transition-transform"
            >
              About
            </Link>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              className="text-lg text-white px-4 py-2 hover:scale-110 transition-transform"
            >
              Pricing
            </ScrollLink>

            <Link
              to="/faqs"
              className="text-lg text-white px-4 py-2 hover:scale-110 transition-transform"
            >
              FAQs
            </Link>
            <Link
              to="/"
              className="bg-white hover:bg-blue-500 text-black hover:text-white font-bold py-2 px-4 border ml-1 mr-2 border-blue-700 rounded flex items-center"
            >
              <FontAwesomeIcon icon={faDownload} className="me-1" />
              Download App
            </Link>
          </div>
        </div>
      </div>
      {showNavLinks && (
        <div className="fixed  top-0 left-0 bottom-0 right-0 bg-gray-900 text-white overflow-auto z-10">
          <div
            className="absolute top-8 max-sm:top-3 max-sm:right-3  lg:right-24 right-8 m-4 cursor-pointer"
            onClick={toggleNavLinks}
          >
            <FaTimes className="text-white text-4xl" />
          </div>
          <div className="flex justify-center items-center max-sm:mt-16 mt-28">
            <div className="flex items-center">
              <Link to="/" className="logo flex items-center">
                <img src={logo} alt="logo" className="h-16 p-1 mr-1 rounded-xl" />
                <img src={leadesh} loading="lazy" alt="" className="w-20" />
              </Link>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-12 max-sm:mt-0 p-8 max-sm:text-2xl text-4xl">
            <Link to="/" className="block py-2 text-center mb-6">
              Home
            </Link>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="block py-2 text-center mb-6"
            >
              Features
            </ScrollLink>
            <Link to="/about-us" className="block py-2 text-center mb-6">
              About
            </Link>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              className="block py-2 text-center mb-6"
            >
              Pricing
            </ScrollLink>
            <Link to="/faqs" className="block py-2 text-center mb-6">
              FAQs
            </Link>
            <Link
              to="/"
              className="bg-white w-fit mx-auto hover:bg-blue-500 text-black hover:text-white font-bold py-2 px-4 border border-blue-700 rounded flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-1" />
              Download App
            </Link>
          </div>
          <div className="flex justify-center items-center my-2 mx-auto">
            <a
              href="https://www.facebook.com/getleadesh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "3rem" }}
            >
              <FaFacebook style={{ color: "#3b5998" }} size={32} />
            </a>
            <a
              href="https://www.facebook.com/getleadesh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "3rem" }}
            >
              <FaInstagram style={{ color: "#e4405f" }} size={32} />
            </a>
            <a
              href="https://twitter.com/getleadesh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "3rem" }}
            >
              <FaTwitter style={{ color: "#00acee" }} size={32} />
            </a>
            <a
              href="https://www.linkedin.com/showcase/leadesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ color: "#0077b5" }} size={32} />
            </a>
          </div>
          {/* <div className="flex justify-center items-center my-8 mx-auto">
            <FaHome
              style={{
                color: "#FFFFFF",
                marginLeft: "2rem",
              }}
              size={32}
            />
            <p className="mt-4 max-sm:mt-8 sm:ml-4 max-sm:ml-0  max-sm:mr-5  flex text-center">
              39A., Wimbeldon House, Parkisnson St, Wellburg, Sydney, AUS
            </p>
          </div> */}
          <div className="flex justify-center items-center my-8 mx-auto">
            <p className="text-center max-sm:text-xs text-sm text-white ">
              © 2023 - 2024 Neonflake Enterprises OPC Pvt Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
