import { useContext, useEffect, useState } from "react"
import Style from "./NavbarMain.module.css"

import { Link } from "react-router-dom"
import MealContext from "../../context/MealContext";

function NavbarMain() {
    const{darkMode,setDarkMode,selectedMeals}= useContext(MealContext)
   const[scrolled,setScrolled]= useState(false);
   useEffect(()=>{

const handleScroll=()=> {
    setScrolled(window.scrollY>50);

}
window.addEventListener("scroll",handleScroll);
return ()=> window.removeEventListener("scroll",handleScroll)
   },[])
   
    return (
        <div className={`${Style.container} ${scrolled? Style.scrolled : ""}`}>
            <button className={` btn--full ${Style.mainNavBtn}`} onClick={()=> setDarkMode((d)=> !d)}>{darkMode? "🌞": "🌙"}</button>
            <Link to="/" className={` ${Style.mainNavBtn}`}>home</Link>
            <Link to="/meals" className={` ${Style.mainNavBtn}`}>meals</Link>
            <Link to="/planner" className={` ${Style.mainNavBtn}`}>planner ({selectedMeals.length})</Link>
        </div>
    )
}

export default NavbarMain

