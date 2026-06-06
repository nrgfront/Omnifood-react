import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MealsPage from "./Pages/MealsPage";
import PlannerPage from "./Pages/PlannerPage";
import NavbarMain from "./components/layout/NavbarMain"
import { MealProvider } from "./context/MealContext";

export default function App() {
  return (
    <MealProvider>
      <div>
        <BrowserRouter>
        <NavbarMain/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/planner" element={<PlannerPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MealProvider>
  );
}
