import React, { useState } from "react";
import Albano from '../../assets/albano1.png';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("menu");
  const [icon, setIcon] = useState("toggler");
  const navToggle = () => {
    if (active === "menu") {
      setActive("menu menu-active");
    } else setActive("menu");

    if (icon === "toggler") {
      setIcon("toggler toggle");
    } else setIcon("toggler");
  };
  return (
    <nav className="nav">
      <Link to='/'>
        <img className="logo-nav" src={Albano} alt="Albano González Cartier" />
      </Link>
      <ul className={active}>
        <li>
          <NavLink activeclassname='active' to='/about'>sobre mi</NavLink>
        </li>
        <li>
          <NavLink activeclassname='active' to='/contacto'>contacto</NavLink>
        </li>
        <li>
          <NavLink activeclassname='active' to='/gallery'>portfolio</NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;