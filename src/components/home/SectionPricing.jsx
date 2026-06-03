import Style from "./SectionPricing.module.css";

function SectionPricing() {
  return (
    <section className={Style["section-pricing"]} id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        <div
          className={`${Style["pricing-plan"]} ${Style["pricing-plan--starter"]}`}
        >
          <header className={Style["plan-header"]}>
            <p className={Style["plan-name"]}>Starter</p>
            <p className={Style["plan-price"]}>
              <span>$</span>399
            </p>
            <p className={Style["plan-text"]}>
              per month. That's just $13 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className={Style["plan-sing-up"]}>
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>

        <div
          className={`${Style["pricing-plan"]} ${Style["pricing-plan--complete"]}`}
        >
          <header className={Style["plan-header"]}>
            <p className={Style["plan-name"]}>Complete</p>
            <p className={Style["plan-price"]}>
              <span>$</span>649
            </p>
            <p className={Style["plan-text"]}>
              per month. That's just $11 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={Style["plan-sing-up"]}>
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className={Style["plan-details"]}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="container grid grid--4-cols">
        <div className={Style["feature"]}>
          <ion-icon
            className={Style["feature-icon"]}
            name="infinite-outline"
          ></ion-icon>
          <p className={Style["feature-title"]}>Never cook again!</p>
          <p className={Style["feature-text"]}>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className={Style["feature"]}>
          <ion-icon
            className={Style["feature-icon"]}
            name="nutrition-outline"
          ></ion-icon>
          <p className={Style["feature-title"]}>Local and organic</p>
          <p className={Style["feature-text"]}>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className={Style["feature"]}>
          <ion-icon
            className={Style["feature-icon"]}
            name="leaf-outline"
          ></ion-icon>
          <p className={Style["feature-title"]}>No waste</p>
          <p className={Style["feature-text"]}>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className={Style["feature"]}>
          <ion-icon
            className={Style["feature-icon"]}
            name="pause-outline"
          ></ion-icon>
          <p className={Style["feature-title"]}>Pause anytime</p>
          <p className={Style["feature-text"]}>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionPricing;
