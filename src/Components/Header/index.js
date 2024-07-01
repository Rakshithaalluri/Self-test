import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";
import "./index.css";

const Header = () => {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropDownOpen);
  };

  return (
    <div className="header-container">
      <div className="hamburger-content">
        <GiHamburgerMenu
          size="20"
          color="ffffff"
          onClick={handleDropdownToggle}
        />
        <h1 className="heading-indigo">Indigo Learn </h1>
      </div>
      {isDropDownOpen && (
        <div className="dropdown-content">
          <p className="text">Campus</p>
          <p className="text">Why Choose Us?</p>
          <p className="text">Placements</p>
          <p className="text">Kickstart</p>
        </div>
      )}

      <div className="sub-headings-container">
        <p className="text"> Campus </p>
        <p className="text"> Why Choose Us? </p>
        <p className="text"> Placements </p>
        <p className="text"> Kickstart </p>
      </div>
      <button className="login-button">
        <IoMdContact size="20" />
        Log In/Sign up
      </button>
    </div>
  );
};

export default Header;
