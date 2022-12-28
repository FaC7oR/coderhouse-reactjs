import xfx570 from "../../items/xfx570.jpg";
import msi580 from "../../items/msi580.jpg";
import asrock590 from "../../items/asrock590.jpg";
import sapphire6600 from "../../items/sapphire6600.jpg";
import gigabyte3060 from "../../items/gigabyte3060.jpg";
import asus3070 from "../../items/asus3070.jpg";
import gigabyte3080 from "../../items/gigabyte3080.jpg";
import evga3090 from "../../items/evga3090.jpg";

import "./ItemListContainer.css";

{/* TUVE QUE IMPORTAR TODAS LAS IMÁGENES PORQUE NO ME PERMITÍA LINKEARLAS DIRECTAMENTE */}

function ListItem(props) {
    return(
        <div className="list-item">
            <img src={props.src} className="list-item-img"/>
            <a>
                {props.title}
            </a>
            <br/>
            <a>
                {props.text}
            </a>
        </div>

    );    
}

export default function ListContainer() {
    return(
        <>
            <div className="list-flex">
                <ListItem title="XFX Radeon RX570 4Gb" text="$55.000" src={xfx570}/>  
                <ListItem title="MSI Radeon RX580 8Gb" text="$67.000" src={msi580}/> 
                <ListItem title="Gigabyte RTX 3060" text="$96.000" src={gigabyte3060}/> 
                <ListItem title="AsRock Radeon RX590" text="$101.000" src={asrock590}/> 
                <ListItem title="Sapphire Radeon RX6600" text="$140.000" src={sapphire6600}/> 
                <ListItem title="Asus RTX 3070" text="$142.500" src={asus3070}/> 
                <ListItem title="Gigabyte RTX 3080" text="$199.000" src={gigabyte3080}/> 
                <ListItem title="EVGA RTX 3090" text="$332.000" src={evga3090}/> 
            </div>
        </>
    );
}