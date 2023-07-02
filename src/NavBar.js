import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link exact to="/" className="site-title">Music Discovery App</Link>
        <ul>
          <li>
            <Link to="/songs" className="items">Song List</Link>
          </li>
          <li>
            <Link to="/add-song" className="items">Add Song</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;