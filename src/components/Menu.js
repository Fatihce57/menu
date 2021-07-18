import React from 'react';
import "./Menu.css";
import CardData from "./Card.json";

function Menu () {
    return (
        <div className="Menu">
            {CardData.map(item=>{
                return(            
            <div className="card">
                <h2 className="card-title">{item.menuName}</h2>
                <h6 className="price">{item.productPrice}</h6>
                <img src={item.menuIMG} alt="menu_image" />
                <p className="card-desc">{item.menuRecipe}</p>
            </div>
            )
            })}
        </div>
    )
}

export default Menu;