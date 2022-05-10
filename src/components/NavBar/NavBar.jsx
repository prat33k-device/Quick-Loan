import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./NavBar.css";

function NavBar() {
  

    return <Fragment>

<nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    
    <Link id="brandName" className="navbar-brand" to="/">QuickLoan</Link>
    {/* responsive button in mobile view */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="nav-bar-ul" className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/profile">Profile</Link>
        </li>
        <li className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/request">Your Requests</Link>
        </li>
        
        <li className="nav-item navListItems">
          <Link className="nav-link navListItems-inner" to="/login"><AccountCircleIcon /><span> Ronnie</span></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </Fragment>;
}

export default NavBar;