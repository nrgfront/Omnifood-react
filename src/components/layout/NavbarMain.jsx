import { useContext, useEffect, useState } from "react"
import Style from "./NavbarMain.module.css"

import { Link } from "react-router-dom"
import MealContext from "../../context/MealContext";

function NavbarMain() {
    const{darkMode,setDarkMode}= useContext(MealContext)
   const[scrolled,setScrolled]= useState(false);
   useEffect(()=>{

const handleScroll=()=> {
    setScrolled(window.scrollY>50);

}
window.addEventListener("scroll",handleScroll);
return ()=> window.removeEventListener("scroll",handleScroll)
   },[])
   
    return (
        <div className={`${Style.Container} ${scrolled? Style.scrolled : ""}`}>
            <button className="btn btn--full" onClick={()=> setDarkMode((d)=> !d)}>{darkMode? "🌞": "🌙"}</button>
            <Link to="/" className="btn">home</Link>
            <Link to="/meals" className="btn">meals</Link>
            <Link to="/planner" className="btn">planner</Link>
        </div>
    )
}

export default NavbarMain

