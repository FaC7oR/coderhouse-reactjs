import "./NavBar.css";
import Carting from "../cartwidget/CartWidget.jsx"

function MenuItem(props) {
    return(
        <a className="menu-item" href={props.href}>
            {props.title}
        </a>
    );    
}


export default function NavBar() {
    return(
        <> 
            <div className="navbar">
                <MenuItem title="Menú" href=""/>
                <MenuItem title="Productos" href=""/>
                <MenuItem title="Carrito" href=""/>
                <Carting/>
            </div>
        </>
    );
}