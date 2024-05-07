import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { menuItemData } from "./menuItemData";
import "./Header.css";
import logo from "../../assets/logo.png";
import MobileNavbar from "./MobileNAvbar";

const Header = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  return (
    <header>
      <div className="nav-area flex items-center justify-between mx-1">
        <div className="flex items-center">
          <Link to="/" className="logo flex items-center">
            <img src={logo} alt="logo" className="h-16 p-1" />
            <span className="ml-2 md:mx-auto">cooby</span>
          </Link>
        </div>
        {isDesktop && (
          <Navbar className="hidden lg:flex" menuItems={menuItemData} />
        )}
        <div className="lg:hidden">
          <button onClick={toggleMobileNavbar}>
            <svg
              className="w-6 h-6 text-white cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {showMobileNavbar && !isDesktop && (
        <MobileNavbar menuItems={menuItemData} onClose={toggleMobileNavbar} />
      )}
    </header>
  );
};

export default Header;
