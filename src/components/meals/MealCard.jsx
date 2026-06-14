import Style from "./MealCard.module.css";



import { FaRegStar } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { LuBicepsFlexed } from "react-icons/lu";
import { useContext, useState } from "react";
import MealContext from "../../context/MealContext";
function MealCard({ meal, onAddMeals, isSelected, mealsLimit,setSelectMeal }) {
  const {selectedMeals}=useContext(MealContext);

 



  const dietColors = {
    Vegan: "#94D82D",
    Vegeterian: "#51CF66",
    "High-Protein": "#fa5252",
    "Gluten-Free": "#ffa94d",
    "Dairy-Free": "#dee2e6",
    Paleo: "#FFD43B",
  };
  return (
    <div className={Style.meal}>
      <img src={meal.image} alt={meal.title} />

      <div className={Style.mealContent}>
        <div className={Style.mealTags}>
          {meal.diets.map((diet, index) => (
            <span style={{ background: dietColors[diet] }} key={index}>
              {diet}
            </span>
          ))}
        </div>
        <h2 className={Style.mealTitle}>{meal.title}</h2>
        <div className={Style.mealAttributes}>
          <div className={Style.score}>
            <span>
              <BsFire className="icon" />
            </span>
            <span>{meal.calories} calories</span>
          </div>
          <div className={Style.score}>
            <span>
              <LuBicepsFlexed className="icon"/>
            </span>
            <span>{meal.protein} g</span>
          </div>

          <div className={Style.score}>
            <FaRegStar className="icon" />
            <span>{meal.nutriScore} </span>
            <span></span>
          </div>
        </div>
        
        <div className={Style.actions}>
          
        <button
          className={`btn ${isSelected ? Style.removeMeal : Style.addMeal} `}
          onClick={() => onAddMeals(meal)}
          disabled={!isSelected && selectedMeals.length >= mealsLimit}
        >
          {isSelected ? "✔ Added" : "+ Add to Plan"}{" "}
        </button>
        <button className={Style.learnMore} onClick={()=> setSelectMeal(meal)} >
          Learn more...
        </button>
        </div>

      </div>
     
    </div>
  );
}

export default MealCard;
