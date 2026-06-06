import { Link } from "react-router-dom";
import Style from "./SectionHero.module.css";

function SectionHero() {
  return (
    <section className={Style["section-hero"]}>
      <div className={Style["hero"]}>
        <div className={Style["hero-text-box"]}>
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={Style["hero-description"]}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
         
            <Link to={"/meals"} className="btn btn--full margin-right-sm">
              Start eating well
            </Link>
         

          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className={Style["delivered-meals"]}>
            <div className={Style["delivered-imgs"]}>
              <img
                src="/img/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <img
                src="/img/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <img
                src="/img/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <img
                src="/img/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <img
                src="/img/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <img
                src="/img/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </div>
            <p className={Style["delivered-text"]}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className={Style["hero-img-box"]}>
          <picture>
            <source srcSet="/img/hero.webp" type="image/webp" />
            <source srcSet="/img/hero-min.png" type="image/png" />

            <img
              src="/img/hero-min.png"
              className={Style["hero-img"]}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
