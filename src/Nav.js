import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
       Vending Machine
      </Link>
      <Link to="/devil-dog">
        Devil Dogs!
      </Link>
      <Link to="/angel">
       Angel Food Cake
      </Link>
      <Link to="/hot-dog">
        Hot Dogs!
      </Link>
    </nav>
  );
}

export default NavBar;