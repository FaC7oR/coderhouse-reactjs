import cart from "../../items/cart.png"

import "./CartWidget.css";

const cantidadItems=25;

export default function NavBar() {
    return(
        <> 
            <div className="cartwidget">
                <div className="cartitem"><img src={cart} className="cartimg"/></div>
                <div className="cartitem">{cantidadItems}</div>
            </div>
        </>
    );
}