import React from "react";
import "./CustomProductsNavBar.scss";
import zevi_logo from "../images/zevi_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const CustomProductsNavBar = () => {
  return (
    <div className="products_navbar">
      
      <div></div>

      {/* Form for search input with search icon */}
      <form className="input_container">
        {/* Input field for search query */}
        <input type="text" className="home_input" placeholder="Search..." />

        {/* Search icon button */}
        <button className="search_icon_container">
          {/* Search icon from react-icons library */}
          <RiSearch2Line size="24" />
        </button>
      </form>

      {/* Link to navigate back to the home page with Zevi logo */}
      <Link to="/">
        {/* Zevi logo image */}
        <img src={zevi_logo} alt="" />
      </Link>
    </div>
  );
};

export default CustomProductsNavBar;
