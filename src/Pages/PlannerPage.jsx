import Style from "./PlannerPage.module.css";
import PlannerCard from "../components/meals/PlannerCard";
import { useContext, useState } from "react";
import MealContext from "../context/MealContext";

import { BsFire } from "react-icons/bs";
import { SiMealie } from "react-icons/si";
import { LuPartyPopper } from "react-icons/lu";

function PlannerPage() {
  const {
    selectedMeals,
    setSelectedMeals,
    totalCalories,
    handleAddMeals,
    resetPlan,
    planType,
  } = useContext(MealContext);

  const [showModal, setShowModal] = useState(false);

  function toggleModal(value) {
    setShowModal(value)
  }
 const dietColors={
    Vegan: "#94D82D",
    Vegeterian:"#51CF66",
 "High-Protein": "#fa5252",
  "Gluten-Free": "#ffa94d",
  "Dairy-Free": "#dee2e6",
  Paleo: "#FFD43B",
  }
  return (
    <div className={Style.plannerContainer}>
      <h3 className=""> My Weekly Plan </h3>
      <div className={Style.summaryCard}>
        <p className={Style.iconFire}>
          {planType === 7 ? "Starter Plan" : "Complete Plan"}
        </p>
        <p className={Style.iconFire}>
          {planType === 7 ? "$399/month" : "$649/month"}
        </p>
        <p className={Style.iconFire}>{planType} Meals Plan</p>
        <p>
          <BsFire className={Style.iconFire} />
          {totalCalories} kcal
        </p>
        <p>
          <SiMealie /> {selectedMeals.length} meals selected
        </p>
      </div>
      <div className={Style.plannerListBox}>
        {selectedMeals.length === 0 ? (
          <p>
            No meals selected yet <SiMealie />{" "}
          </p>
        ) : (
          selectedMeals.map((meal) => (
            <div className={Style.plannerList} key={meal.id}>
              <p>{meal.title}</p>
              <p>
                <BsFire className={Style.iconFire} />
                {meal.calories} kcal
              </p>
              <div className={Style.dietTag}>
                {meal.diets.map((diet,index)=> (<span style={{background: dietColors[diet] }} key={index}>{diet}</span>))}</div>
              <button
                className={`btn  ${Style.btnRemove}`}
                onClick={() => handleAddMeals(meal)}
              >
                X
              </button>
            </div>
          ))
        )}{" "}
      </div>
      <div className={Style.planCompleteContainer}>
        <button className="btn" onClick={() => resetPlan()}>
          Clear Plan
        </button>

        {selectedMeals.length === planType ? (
          <button className="btn btn--full" onClick={()=> toggleModal(true)}>
            Confirm Order
          </button>
        ) : (
          ""
        )}
        {showModal && (
          <div className={Style.overlay} onClick={() => toggleModal(false)}>
            <div className={Style.modal} onClick={(e)=> e.stopPropagation()}>
              <p className={Style.planComplete}>
                <LuPartyPopper className={Style.iconParty} /> Your meal plan is
                ready and will be delivered soon!{" "}
              </p>
              <button onClick={()=> toggleModal(false)} className="btn btn--full">X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlannerPage;
