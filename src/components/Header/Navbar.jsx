import React from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = ({ menuItems }) => {
  return (
    <nav className="flex">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              direction={false}
            />
          );
        })}
      </ul>
      <Link
        to="/get-started"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border ml-1 mr-2 border-blue-700 rounded"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
