import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import About from '../About/About'

const Navbar = () => {
  const navigate = useNavigate();

  const gotoStore = () => {
    navigate('./About');
  }
  return (
    < >
        <nav class="navbar navbar-expand-lg  nav1 bg-dark bg-gradient">
    <div class="container-fluid nav_color">
      <a class="navbar-brand nav_text" href="#">
        <img src="../img/profile.jpg" alt="" className='nav_img1'/>
        Rahul Narayan
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item m-3">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item m-3">
            <a class="nav-link active" href="./About">About Us</a>
          </li>
          <li class="nav-item m-3">
            <a class="nav-link active" href="#">Blogs</a>
          </li>
          <li class="nav-item m-3">
            <a href="http://www.youtube.com/@Rahulfitness2909" class="nav-link active" aria-disabled="true">Tutorial</a>
          </li>
        </ul>
      </div>
  </div>
</nav>
      
    </>
  )
}

export default Navbar
