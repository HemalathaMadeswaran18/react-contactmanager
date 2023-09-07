import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Contact Manager</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
 

      <li class="nav-item active">
        <Link class="nav-link" to="/">About Us </Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="contact">ContactBook</Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="addcontact">Add Contact</Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="contactus">Contact Us</Link>
      </li>

    
     
     
    </ul>
  </div>
</nav>

    )
}

export default Header;