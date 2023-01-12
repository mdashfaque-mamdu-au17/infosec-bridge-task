import React from 'react';
import Logo from '../assets/react-logo.png';
const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="" className="logo" />
      <div>
        <p>
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </div>
    </div>
  );
};

export default Header;
