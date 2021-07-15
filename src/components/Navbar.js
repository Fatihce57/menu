import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
     <h1 className="nav-header">OUR MENU</h1>
      <nav className="nav-list">
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Drinks</li>
        <li>Specials</li>
      </nav>
    </div>
  );
}

export default Navbar;