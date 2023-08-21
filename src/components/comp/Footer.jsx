

export const Footer = () =>{    

    return(
        <footer className="footer" >
            <h2>dine</h2>
            <div className="footer__location">
                <p>MARTHWAITE, SEDBERGH</p>
                <p>CUMBRIA</p>
                <p className="phone" >Phone:+00 44 123 4567</p>
            </div>
            <div className="footer__hours">
                <h4>Open times</h4>
                <ul>
                  <li>Mon - Fri: 9:00 am - 10:00 pm</li>
                  <li>Sat - Sun: 9:00 am - 11:30 pm</li>
                </ul>              
              </div>
        </footer>
    )
}