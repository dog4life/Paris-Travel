import React from 'react'
import './Navbar.css'
import Home from './Home'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand logo-text" href="#">Marian</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        
        <Link to='/home' class="nav-link mx-3 navlist" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3 navlist" href="#">About</a>
      </li>
      <li class="nav-item">
        <Link to='/places' class="nav-link mx-3 navlist" >Places</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-3 navlist" href="#">Contact Us</a>
      </li>
     <button className='btn btn-outline-warning px-5 py-2'>Book Online</button>
    </ul>
  
  </div>
</nav>
</div>

</>
  )
}

export default Navbar
