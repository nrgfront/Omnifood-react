import { createContext, useState,  } from "react";

const MealContext= createContext();

function MealProvider({children}){
   const [selectedMeals, setSelectedMeals] = useState([]);  
return (
    <MealContext.Provider value={selectedMeals,setSelectedMeals}>
        {children}
    </MealContext.Provider>
)
}

export {MealProvider}
export default MealContext;