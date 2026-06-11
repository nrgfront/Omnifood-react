import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MealsPage from "./Pages/MealsPage";
import PlannerPage from "./Pages/PlannerPage";
import NavbarMain from "./components/layout/NavbarMain"
import MealContext, { MealProvider } from "./context/MealContext";
import { useContext, useEffect } from "react";

export default function App() {
 
  return <MealProvider>
    <AppContent/>
  </MealProvider>
}

function AppContent(){
 const{darkMode}= useContext(MealContext);


  return (
   
      <div className={`app ${darkMode? "dark" : ""}`}>
        <BrowserRouter>
        <NavbarMain/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/planner" element={<PlannerPage />} />
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}