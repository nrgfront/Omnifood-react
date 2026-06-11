import { useContext } from "react"
import Style from "./Logo.module.css"
import { Link } from "react-router-dom"
import MealContext from "../../context/MealContext"




function Logo() {
    const {darkMode}= useContext(MealContext)
    return (
        <div>
             <Link to={"/"}>
        <img className={`${Style.logo} ${darkMode ? Style.darkLogo : ""}`} alt="Omnifood logo" src="/img/omnifood-logo.png" />
      </Link>
        </div>
    )
}

export default Logo
