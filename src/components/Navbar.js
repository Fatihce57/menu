import "./Navbar.css";
import CardData from "./Card.json";
import {useState} from "react";

function Navbar() {


// const HandleBreakfast=()=>{
//   const[data, setData]=useState(0);

//  const 
// }


  return (
    <div className="Navbar">
      <img src="../assets/header.jpg" alt="restaurant" width="100%" height="150px" />
     <h1 className="nav-header">FATIH'S MENU</h1>
      <nav className="nav-list">
        <li>All</li>
        {/* <li onClick={HandleBreakfast}>Breakfast</li> */}
        <li>Lunch</li>
        <li>Drinks</li>
        <li>Specials</li>
      </nav>
    </div>
  );
}

export default Navbar;