import { useEffect, useState } from "react"
import Style from "./NavbarMain.module.css"

import { Link } from "react-router-dom"

function NavbarMain() {
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
            <Link to="/" className="btn">home</Link>
            <Link to="/meals" className="btn">meals</Link>
            <Link to="/planner" className="btn">planner</Link>
        </div>
    )
}

export default NavbarMain

