import Style from "./Logo.module.css"
import { Link } from "react-router-dom"




function Logo() {
    return (
        <div>
             <Link to={"/"}>
        <img className={Style.logo} alt="Omnifood logo" src="/img/omnifood-logo.png" />
      </Link>
        </div>
    )
}

export default Logo
