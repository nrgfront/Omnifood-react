import { useContext, useEffect, useState } from "react";
import Style from "./MealsPage.module.css";
import { Link } from "react-router-dom";

import MealCard from "../components/meals/MealCard";
import PlannerCard from "../components/meals/PlannerCard";
import MealContext, { MealProvider } from "../context/MealContext";
 import { transformedMeals } from "../../data/transformedMeals";

import { BsFire } from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";




const API_KEY=import.meta.env.VITE_SPOONACULAR_API_KEY


function MealsPage() {
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [search, setSearch] = useState("");
   const [selectMeal,setSelectMeal]= useState(null)
  const {
    selectedMeals,
    setSelectedMeals,
    totalCalories,
    handleAddMeals,
    planType,
  } = useContext(MealContext);


 
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);


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


  const filteredMeals = transformedMeals[0]?.filter((meal) => {
    const machesDiet = selectedDiet === "all" || meal.diets.includes(selectedDiet);

    const machesSearch = meal.title
      ?.toLowerCase()
      .includes(search.toLowerCase()) || false;

    return machesDiet && machesSearch;
  } );

  const mealsLimit = planType;
  const progress = (selectedMeals.length / mealsLimit) * 100;

//   if (isLoading) return <p>Loading...</p>;
// if (error) return <p>{error}</p>;
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
            onClick={() => setSelectedDiet("Vegan")}
          >
            Vegan
          </button>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "Vegetarian" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("Vegeterian")}
          >
            Vegeterian
          </button>
          <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "Gluten-Free" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("Gluten-Free")}
          >
            Gluten-Free
          </button>
           <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "Dairy-Free" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("Dairy-Free")}
          >
            Dairy-Free
          </button>
           <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "Paleo" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("Paleo")}
          >
            Paleo
          </button>
           <button
            className={` btn ${Style.filterBtn} ${selectedDiet === "High-Protein" ? Style.activeFilter : ""}`}
            onClick={() => setSelectedDiet("High-Protein")}
          >
            High-Protein
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
               setSelectMeal={setSelectMeal}
                onAddMeals={handleAddMeals}
                isSelected={isSelected}
                mealsLimit={mealsLimit}
              />
            );
          })
        )

        }
         {selectMeal ? <div className={Style.modalMealContainer}>

<div className={Style.overlay} onClick={()=> setSelectMeal(null)}>
  <div className={Style.modal} onClick={(e)=>e.stopPropagation()}>
    <div className={Style.modalHeader}>
       <h3> {selectMeal.title}</h3>
       <button className={Style.closeBtn} onClick={()=> setSelectMeal(null)} >X</button>
    </div>
    <div className={Style.summaryContainer} >
 <FaRegFileAlt className={Style.summaryIcon}/>
   <p className={Style.summary}>{selectMeal.summary}</p>
    </div>
 
   <div className={Style.list}>
    <h4>Ingredients</h4>
   <ul> {selectMeal.ingredients.map((n,i)=>(<li className="list-item" key={i}>{n}</li>) )}</ul></div>
   
  </div>
</div>
      </div> : ""}
      </div>
      <Link to="/planner" className={`btn btn--full ${Style.btnPlan}`}>
       ({selectedMeals.length}) meals selected
      </Link>
    </div>
  );
}

export default MealsPage;
