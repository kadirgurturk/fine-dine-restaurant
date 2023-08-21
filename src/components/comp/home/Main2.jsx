import enjoyableMobil from "../../../assets/homepage/enjoyable-place-mobile.jpg"
import enjoyablePad from "../../../assets/homepage/enjoyable-place-tablet.jpg"
import enjoyableDestkop from "../../../assets/homepage/enjoyable-place-desktop.jpg"

import locallyDestkop from "../../../assets/homepage/locally-sourced-desktop.jpg"
import locallyMobil from "../../../assets/homepage/locally-sourced-mobile.jpg"
import locallyPad from "../../../assets/homepage/locally-sourced-tablet.jpg"

import rightCurve from "../../../assets/patterns/pattern-curve-top-right.svg"
import leftCurve from "../../../assets/patterns/pattern-curve-top-left.svg"

import lines from "../../../assets/patterns/pattern-lines.svg"
import divide from "../../../assets/patterns/pattern-divide.svg"


export const Main2 = () =>{    

    return(
        <div className="main2" >
           <div className="containers">
           <div className="container up">    
                <div className="about__img">
                    <picture>
                        <source srcSet={enjoyableDestkop} media="(min-width: 1200px)" />
                        <source srcSet={enjoyablePad} media="(min-width: 768px)" />
                        <img src={enjoyableMobil}  />
                    </picture>
                </div>
                <img id="rightCurve"   className="curve" src={rightCurve} alt="curve" />
                
                <div className="about__text">
                    <img id="divide-up" className="divide" src={divide} alt="divide" />
                    <h2>Enjoyable place for all the family</h2>
                    <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>

            <div className="container down">
                
                <div className="about__img">
                    <div className="images" id="local">
                        <picture>
                            <source srcSet={locallyDestkop} media="(min-width: 1200px)" />
                            <source srcSet={locallyPad} media="(min-width: 768px)" />
                            <img src={locallyMobil}  />
                        </picture>
                        <img src={lines} id="lines" alt="lines" />  
                    </div>
                </div>
                <img id="leftCurve"   className="curve"  src={leftCurve} alt="curve" />
                
                <div className="about__text">
                    <img id="divide-down" className="divide" src={divide} alt="divide" />
                    <h2>The most locally sourced food</h2>
                    <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                </div>
            </div>
           </div>
            
        </div>
    )
}