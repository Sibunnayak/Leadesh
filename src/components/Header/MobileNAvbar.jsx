import React from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const MobileNavbar = ({ menuItems, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-gray-900 w-full  py-8">
        <button className="absolute top-4 right-4" onClick={onClose}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col ">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                onClose={onClose}
                direction={true}
              />
            );
          })}
          <Link
            to="/get-started"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border mt-8 mx-auto border-blue-700 rounded self-start"
            onClick={onClose}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
