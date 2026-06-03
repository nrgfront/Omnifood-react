import Style from "./Footer.module.css";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className={Style["footer"]}>
      <div className={`${"container"} ${"grid"} ${Style["grid--footer"]}`}>
        <div className={Style["logo-col"]}>
          <a href="#" className={Style["footer-logo"]}>
            <img
              className={Style["logo"]}
              alt="Omnifood logo"
              src="/img/omnifood-logo.png"
            />
          </a>

          <ul className={Style["social-links"]}>
            <li>
              <a className={Style["footer-link"]} href="#">
                <ion-icon
                  className={Style["social-icon"]}
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                <ion-icon
                  className={Style["social-icon"]}
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                <ion-icon
                  className={Style["social-icon"]}
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className={Style["copyright"]}>
            Copyright &copy; <span className="year">2027</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>

        <div className={Style["address-col"]}>
          <p className={Style["footer-heading"]}>Contact us</p>
          <address className={Style["contacts"]}>
            <p className={Style["address"]}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className={Style["footer-link"]} href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a
                className={Style["footer-link"]}
                href="mailto:hello@omnifood.com"
              >
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav className={Style["nav-col"]}>
          <p className={Style["footer-heading"]}>Account</p>
          <ul className={Style["footer-nav"]}>
            <li>
              <a className={Style["footer-link"]} href="#">
                Create account
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className={Style["nav-col"]}>
          <p className={Style["footer-heading"]}>Company</p>
          <ul className={Style["footer-nav"]}>
            <li>
              <a className={Style["footer-link"]} href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                For Business
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className={Style["nav-col"]}>
          <p className={Style["footer-heading"]}>Resources</p>
          <ul className={Style["footer-nav"]}>
            <li>
              <a className={Style["footer-link"]} href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Help center
              </a>
            </li>
            <li>
              <a className={Style["footer-link"]} href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
