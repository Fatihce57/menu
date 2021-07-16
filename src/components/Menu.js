import React from 'react';
import "./Menu.css";

const Menu = (props) => {
    return (
        <div className="Menu">
            <div className="card">
                <h2 className="card-title">{props.menuName}</h2>
                <h6 className="price">{props.productPrice}</h6>
                <img src={props.menuIMG} alt="menu_image" />
                <p className="card-desc">{props.menuRecipe}</p>
            </div>
        </div>
    )
}

export default Menu;