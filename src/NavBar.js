import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/add-song">Add Song</Link>
      </nav>
    </div>
  );
}

export default NavBar;