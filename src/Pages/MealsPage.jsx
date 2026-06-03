import { useEffect, useState } from "react";
import Style from "./MealsPage.module.css";
import meals from "../../data/meals";
import MealCard from "../components/meals/MealCard";


import { BsFire} from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import PlannerCard from "../components/meals/PlannerCard";
import { Link } from "react-router-dom";

function MealsPage() {
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [search, setSearch] = useState("");
    const [selectedMeals, setSelectedMeals] = useState([]);  

  const filteredMeals = meals.filter((meal) => {
    const machesDiet = selectedDiet === "all" || meal.diet === selectedDiet;

    const machesSearch = meal.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return machesDiet && machesSearch;
  });

  function handleAddMeals(meal) {
    const isSelected = selectedMeals.some((item) => item.id === meal.id);
    if (isSelected) {
      setSelectedMeals((prev) => prev.filter((item) => item.id !== meal.id));
    } else {
      setSelectedMeals((prev) => [...prev, meal]);
    }
  }
 
  const totalCalories = selectedMeals.reduce(
    (sum, meal) => sum + meal.calories,
    0,
  );

  const mealsLimit = 7;
  const progress = (selectedMeals.length / mealsLimit) * 100;

  return (
    <div className={Style.sectionMealsPage}>
      <div className={Style.mealBar}>
        <div className={Style.filters}>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "all" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("all")}
          >
            all
          </button>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "vegan" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("vegan")}
          >
            vegan
          </button>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "keto" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("keto")}
          >
            keto
          </button>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "high-protein" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("high-protein")}
          >
            high-protein
          </button>
        </div>
        <div className={Style.searchBox}>
          <RiSearch2Line className={Style.iconSearch} />
          <input
            className={Style.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search meals..."
          />
        </div>
      </div>
      <div className={Style.progressWrapper}>
        <div className={Style.progressInfo}>
          <div>

          <p>Your Weekly Plan</p>
          <p>
            {selectedMeals.length} / {mealsLimit} selected meals
          </p>
          </div>
          <div>
            <div className={Style.infoItem}>
              <BsFire className={Style.iconFire} />
              <p>{totalCalories} calories</p>
            </div>
            <div>
              {selectedMeals.length === mealsLimit
                ?<p> <LuPartyPopper className={Style.iconParty}/>Plan Complete</p>
                :<p> {Math.round(progress)} % Complete  </p>
               } </div>
          </div>
        </div>

        <div className={Style.progressBar}>
          <div
            className={Style.progressFill}
            style={{
              width: `${progress}%`,
              backgroundColor:
                selectedMeals.length === mealsLimit ? "#51cf66" : "#e67e22",
            }}
          ></div>
        </div>
      </div>
      <PlannerCard selectedMeals={selectedMeals} onAddMeals={handleAddMeals} totalCalories={totalCalories}/>

      <div className={Style.mealsContainer}>
        {filteredMeals.length === 0 ? (
          <p className="message">No meals found</p>
        ) : (
          filteredMeals.map((meal) => {
            const isSelected = selectedMeals.some(
              (item) => item.id === meal.id,
            );
            return (
              <MealCard
                key={meal.id}
                meal={meal}
                selectedMeals={selectedMeals}
                onAddMeals={handleAddMeals}
                isSelected={isSelected}
                mealsLimit={mealsLimit}
              />
            );
          })
        )}
        
      </div>
      <Link to="/planner" className="btn btn--full">
        view my plan 
        </Link>
    </div>
  );
}

export default MealsPage;
