import { Link } from "react-router-dom"
import logo1 from "../../../assets/homepage/hero-bg-mobile.jpg"


export const Main1 = () =>{    

    return(
        <div className="main1" >
            <div className="container">
                <h1>dine</h1>
                <h3>Exquisite dining since 1989</h3>
                <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <li><Link to={"/booking"} >BOOK A TABLE</Link></li>
            </div>
            
        </div>
    )
}