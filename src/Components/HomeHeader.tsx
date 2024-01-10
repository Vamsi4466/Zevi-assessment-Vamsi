import React from 'react';
import Zevi_logo from "../images/zevi_logo.svg"; 
import "./HomeHeader.scss"; 
import { Link } from 'react-router-dom'; 

// Functional component for the home header
const HomeHeader = () => {
  return (
    <div className='header'> 
        {/* Using the Link component to create a link to the home page */}
        <Link to="/">
          
          <img className="logo" src={Zevi_logo} alt="Zevi Logo" />
        </Link>
    </div>
  );
}

export default HomeHeader; 
