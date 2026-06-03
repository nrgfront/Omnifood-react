import Style from "./PlannerCard.module.css"
import { SiMealie } from "react-icons/si";
import { BsFire} from "react-icons/bs";
function PlannerCard({ selectedMeals,onAddMeals,totalCalories }) {
  return (
    <div className={Style.plannerCard}>
      <h3 className={Style.title}><SiMealie />selected meals { selectedMeals.length===0 && ""}
    
        {selectedMeals.length>0 && `(${selectedMeals.length})`}
      </h3>
        {selectedMeals.length===0 && <p className={Style.emty}>No meals selected yet</p>}
      {selectedMeals.map((meal) => (
      
        <div key={meal.id} className={Style.plannerMeal}>
          <p >{meal.title}</p>
          <button className={`btn ${Style.btnRemove}`} onClick={()=>onAddMeals(meal)}>x</button>
        </div>
        
       
      ))
      }
      <div className={Style.totalCal}><BsFire className={Style.iconFire} /><p>Total: {totalCalories} kcal</p></div>
     
    </div>
  );
}

export default PlannerCard;
