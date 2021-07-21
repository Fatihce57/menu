import "./Navbar.css";
import CardData from "./Card.json";
import {useState} from "react";

function Navbar() {


const handleBreakfast=()=>{
  

}


  return (
    <div className="Navbar">
     <h1 className="nav-header">FATIH'S MENU</h1>
      <nav className="nav-list">
        <li>All</li>
        <li onClick={handleBreakfast}>Breakfast</li>
        <li>Lunch</li>
        <li>Drinks</li>
        <li>Specials</li>
      </nav>
    </div>
  );
}

export default Navbar;