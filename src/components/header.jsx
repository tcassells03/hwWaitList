import React from "react";
import homeworkImg from '../assets/homework.jpg';

const Header = () => {
  return (
    <div class="headerContainer">
        <img src={homeworkImg} alt="Description of the image" className="hwImage"/>
        <h1 class = "headerText">Name of Website</h1>
    </div>
  );
};

export default Header;
