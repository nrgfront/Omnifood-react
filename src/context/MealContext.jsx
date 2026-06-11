import { createContext, useEffect, useState } from "react";

const MealContext = createContext();

function MealProvider({ children }) {
  const [planType, setPlanType] = useState(7);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState(() => {
    const stored = localStorage.getItem("selectedMeals");

    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log("invalid JSON in localStorage");
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("selectedMeals", JSON.stringify(selectedMeals));
  }, [selectedMeals]);

useEffect( function fetchDetailMeals(){

},[])


  const totalCalories = selectedMeals.reduce(
    (sum, meal) => sum + meal.calories,
    0,
  );

  function handleAddMeals(meal) {
    const isSelected = selectedMeals.some((item) => item.id === meal.id);
    if (isSelected) {
      setSelectedMeals((prev) => prev.filter((item) => item.id !== meal.id));
    } else {
      setSelectedMeals((prev) => [...prev, meal]);
    }
  }
  function resetPlan() {
    setSelectedMeals([]);
  }
  return (
    <MealContext.Provider
      value={{
        selectedMeals,
        setSelectedMeals,
        totalCalories,
        handleAddMeals,
        resetPlan,
        planType,
        setPlanType,
        setDarkMode,
        darkMode,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

export { MealProvider };
export default MealContext;
