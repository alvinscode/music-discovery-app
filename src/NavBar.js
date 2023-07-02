import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav">
      <nav>
        <Link exact to="/" className="items">Home</Link>
        <Link to="/songs" className="items">Songs</Link>
        <Link to="/add-song" className="items">Add Song</Link>
      </nav>
    </div>
  );
}

export default NavBar;