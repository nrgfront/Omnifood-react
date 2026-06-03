import Style from "./MealCard.module.css";

function MealCard({ meal,selectedMeals,onAddMeals,isSelected,mealsLimit }) {
  return (
    
    <div className={Style.meal}>
      <img src={meal.image} alt={meal.title} />

      <div className={Style.mealContent}>
        <div className={Style.mealTags}>
            <span>{meal.diet}</span>
        </div>
        <h2 className={Style.mealTitle}>{meal.title}</h2>
        <div className={Style.mealAttributes}>
          <p>{meal.calories} calories</p>
          <p>{meal.protein}g protein</p>
        </div>
        <button className={`btn ${isSelected? Style.removeMeal: Style.addMeal  } `} onClick={()=> onAddMeals(meal)} disabled={!isSelected && selectedMeals.length>=mealsLimit}>{isSelected ? "✔ Added" : "+ Add to Plan"}     </button>
      </div>
    </div>
  );
}

export default MealCard;
