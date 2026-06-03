import Style from "./SectionMeals.module.css"


function SectionMeals() {
    return (
         <section className={Style["section-meals"]} id="meals">
        <div className="container center-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className={Style["meal"]}>
            <img
              src="/img/meals/meal-1.jpg"
              className={Style["meal-img"]}
              alt="Japanese Gyozas"
            />
            <div className={Style["meal-content"]}>
              <div className={Style["meal-tags"]}>
                <span className={`${Style["tag"]} ${Style["tag--vegetarian"]}`}>Vegetarian</span>
              </div>
              <p className={Style["meal-title"]}>Japanese Gyozas</p>
              <ul className={Style["meal-attributes"]}>
                <li className={Style["meal-attribute"]}>
                  <ion-icon className={Style["meal-icon"]} name="flame-outline"></ion-icon>
                  <span><strong>650</strong> calories</span>
                </li>
                <li className={Style["meal-attribute"]}>
                  <ion-icon
                    className={Style["meal-icon"]}
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>NutriScore &reg; <strong>74</strong></span>
                </li>
                <li className={Style["meal-attribute"]}>
                  <ion-icon className={Style["meal-icon"]} name="star-outline"></ion-icon>
                  <span><strong>4.9</strong> rating (537)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={Style["meal"]}>
            <img
              src="/img/meals/meal-2.jpg"
              className={Style["meal-img"]}
              alt="Avocado Salad"
            />
            <div className={Style["meal-content"]}>
              <div className={Style["meal-tags"]}>
                <span className={`${Style["tag"]} ${Style["tag--vegan"]}`}>Vegan</span>
                <span className={`${Style["tag"]} ${Style["tag--paleo"]}`}>Paleo</span>
              </div>
              <p className={Style["meal-title"]}>Avocado Salad</p>
              <ul className={Style["meal-attributes"]}>
                <li className={Style["meal-attribute"]}>
                  <ion-icon className={Style["meal-icon"]} name="flame-outline"></ion-icon>
                  <span><strong>400</strong> calories</span>
                </li>
                <li className={Style["meal-attribute"]}>
                  <ion-icon
                    className={Style["meal-icon"]}
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>NutriScore &reg; <strong>92</strong></span>
                </li>
                <li className={Style["meal-attribute"]}>
                  <ion-icon className={Style["meal-icon"]} name="star-outline"></ion-icon>
                  <span><strong>4.8</strong> rating (441)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={Style["diets"]}>
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Vegan</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Keto</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Paleo</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Low FODMAP</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${"container"} ${Style["all-recipes"]}`}>
          <a href="#" className="link">See all recipes &rarr;</a>
        </div>
      </section>
    )
}

export default SectionMeals
