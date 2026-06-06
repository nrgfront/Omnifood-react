import Style from "./SectionHow.module.css"

function SectionHow() {
    return (
         <section className={Style["section-how"]} id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>

        <div className={`container grid grid--2-cols grid--center-v ${Style.stepContainer}`}>
          {/* <!-- STEP 01 --> */}
          <div className={Style["step-text-box"]}>
            <p className={Style["step-number"]}>01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className={Style["step-description"]}>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>

          <div className={Style["step-img-box"]}>
            <img
              src="/img/app/app-screen-1.png"
              className={Style["step-img"]}
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          {/* <!-- STEP 02 --> */}
          <div className={Style["step-img-box"]}>
            <img
              src="/img/app/app-screen-2.png"
              className={Style["step-img"]}
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className={Style["step-text-box"]}>
            <p className={Style["step-number"]}>02</p>
            <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
            <p className={Style["step-description"]}>
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          {/* <!-- STEP 03 --> */}
          <div className={Style["step-text-box"]}>
            <p className={Style["step-number"]}>03</p>
            <h3 className="heading-tertiary">Receive meals at convenient time</h3>
            <p className={Style["step-description"]}>
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className={Style["step-img-box"]}>
            <img
              src="/img/app/app-screen-3.png"
              className={Style["step-img"]}
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>
    )
}

export default SectionHow
