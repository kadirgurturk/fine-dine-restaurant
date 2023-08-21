import { Link } from "react-router-dom"

export const Main5 = () =>{    

    return(
        <div className="main5" >
            <h2>Ready to make a reservation?</h2>
            <li><Link to={"/booking"} >BOOK A TABLE</Link></li>
        </div>
    )
}