import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo1.png"

const Navbar = () => {
  return <>
 
      {/* <nav className="navbar navbar-expand-lg navbar-light" > */}
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-5">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <a class="navbar-brand" href="/">ENIGMA | IEEE-SB MMMUT</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/leaderboard">Leaderboard <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
      </li>
      
    </ul>
    
  </div>
</nav>
  </>;
};

export default Navbar;
