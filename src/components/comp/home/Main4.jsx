import { useState } from "react";
import { eventItems } from "../../../assets/util";
import { Link } from "react-router-dom"
import rightCurve from "../../../assets/patterns/pattern-curve-top-right.svg"



export const Main4 = () =>{
    const [eventInfo, setEventInfo] = useState(0);
    const {title, description, images} = eventItems[eventInfo]
    const {mobile, tablet, desk} = images    

    return(
        <div className="main4" >
            
            <img id="rightCurve" className="curve" src={rightCurve} alt="curve" />
                <picture>
                    <source media="(min-width:992px)" srcSet={desk}/>
                    <source media="(min-width:768px)" srcSet={tablet}/>
                    <img src={mobile}/>
                </picture>
                <div className="events">
                    {eventItems.map((ıtem,index) => {
                        return(
                            <p className={`event ${index === eventInfo && 'selected'}`}
                                key={ıtem.id}
                                onClick={()=>{setEventInfo(index)}}
                            >    
                            {ıtem.title}
                            </p>
                        )
                    })}
                </div>
                <div className="events__info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <li><Link to={"/booking"} >BOOK A TABLE</Link></li>
                </div>      
            
        </div>
    )
}