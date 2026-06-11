import { useContext, useEffect, useState } from "react";
import Style from "./MealsPage.module.css";
import { Link } from "react-router-dom";

// import meals from "../../data/meals";
import MealCard from "../components/meals/MealCard";
import PlannerCard from "../components/meals/PlannerCard";
import MealContext, { MealProvider } from "../context/MealContext";
 import formatedMeals from "../../data/formatedMeals.jsx"

import { BsFire } from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";

 import rawMeals from "../../data/rawMealsBackUp.jsx";

// import * as test from "../../data/meal";

console.log(rawMeals);
 console.log(formatedMeals);



const API_KEY=import.meta.env.VITE_SPOONACULAR_API_KEY

// console.log(formattedMeals);

function MealsPage() {
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [search, setSearch] = useState("");
  const {
    selectedMeals,
    setSelectedMeals,
    totalCalories,
    handleAddMeals,
    planType,
  } = useContext(MealContext);

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



// useEffect(()=> {
// async function fechMeals() {
//  try{
//    setIsLoading(true);
//   const res= await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=&number=60&addRecipeNutrition=true&fillIngredients=true');
//   const data= await res.json();

// console.log(data.results
// );

// const formattedMeals= data.meals.map((meal)=> ({
//   id: meal.idMeal,
//   title: meal.strMeal,
//   calories: meal.caloriesPerServing,
//   image: meal.strMealThumb,
//   diet: meal.strCategory
// }))
// setMeals(formattedMeals);

//  }catch(error){
 
// setError("failed to fetch data") } finally{
//   setIsLoading(false)
// }
  
// }
// fechMeals();
// },[])


  // const filteredMeals = formattedMeals?.filter((meal) => {
  //   const machesDiet = selectedDiet === "all" || meal.diet.includes(selectedDiet) === selectedDiet;

  //   const machesSearch = meal.title
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   return machesDiet && machesSearch;
  // } );

  const mealsLimit = planType;
  const progress = (selectedMeals.length / mealsLimit) * 100;
// console.log(rawMeals);

// console.log("MEALS:", rawMeals);
// window.rawMeals = rawMeals;

  if (isLoading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
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
          {}
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
              {selectedMeals.length === mealsLimit ? (
                <p>
                 
                  <LuPartyPopper className={Style.iconParty} />
                  Plan Complete
                </p>
              ) : (
                <p> {Math.round(progress)} % Complete </p>
              )}
            </div>
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
      <PlannerCard
        selectedMeals={selectedMeals}
        onAddMeals={handleAddMeals}
        totalCalories={totalCalories}
      />

      <div className={Style.mealsContainer}>
        {meals.length === 0 ? (
          <p className="message">No meals found</p>
        ) : (
          meals.map((meal) => {
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
