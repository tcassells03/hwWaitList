import React from "react";
import homeworkImg from "../assets/header.svg";

const Header = () => {
  return (
    <div class="headerContainer">
      <img
        src={homeworkImg}
        alt="Description of the image"
        className="hwImage"
      />
    </div>
  );
};

export default Header;
