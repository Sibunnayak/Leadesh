import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel,direction }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  return (
    <li
      // className="menu-items"
      className={`menu-items list-none ${direction ? "mx-auto" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.path}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
