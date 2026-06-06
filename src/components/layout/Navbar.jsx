import Style from "./Navbar.module.css";
import Logo from "./Logo";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
const[isOpen,setIsOpen]= useState(false)
console.log(isOpen)
  return (
  

    <header className={`${Style.header}  `}>
      <Logo />

      <nav className={`${Style.mainNav} ${isOpen ? Style.open : ""}`}>
        <ul className={Style["main-nav-list"]}>
          <li>
            <a className={Style["main-nav-link"]} href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className={Style["main-nav-link"]} href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className={Style["main-nav-link"]} href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className={Style["main-nav-link"]} href="#pricing">
              Pricing
            </a>
          </li>
          
            <li>
              <Link to={"/meals"}
                className={`${Style["main-nav-link"]} ${Style["nav-cta"]}`}
                
              >
                Try for free
              </Link>
            </li>
          
        </ul>
      </nav>

      <button className={Style["btn-mobile-nav"]} onClick={()=> setIsOpen(prev=> !prev)}>
        {
          isOpen? <ion-icon
          className={Style["icon-mobile-nav"]}
          name="close-outline"
        ></ion-icon> : <ion-icon
          className={Style["icon-mobile-nav"]}
          name="menu-outline"
        ></ion-icon> 
        }
       
       
      </button>
    </header>
  );
}

export default Navbar;
