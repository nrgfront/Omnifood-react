import { Link, NavLink } from "react-router-dom";
import Style from "./Navbar.module.css";
import Logo from "./Logo";

function Navbar() {
  return (
    // <nav>
    //     <Logo/>
    //     <ul>
    //         <li  ><NavLink className={({isActive})=> isActive? "cta-secondary active" :"cta-secondary" } to="/">Home</NavLink></li>
    //         <li ><NavLink className="cta-secondary" to="/books">books</NavLink></li>
    //         <li ><NavLink className="cta-secondary" to="/favorites">Favorites</NavLink></li>

    //     </ul>

    // </nav>

    <header className={Style.header}>
      <Logo />

      <nav className="main-nav">
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
          <Link to={"/foods"}>
            <li>
              <a
                className={`${Style["main-nav-link"]} ${Style["nav-cta"]}`}
                href="#cta"
              >
                Try for free
              </a>
            </li>
          </Link>
        </ul>
      </nav>

      <button className={Style["btn-mobile-nav"]}>
        <ion-icon
          className={Style["icon-mobile-nav"]}
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          className={Style["icon-mobile-nav"]}
          name="close-outline"
        ></ion-icon>
      </button>
    </header>
  );
}

export default Navbar;
