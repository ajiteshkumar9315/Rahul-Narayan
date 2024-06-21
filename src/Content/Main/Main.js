import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Main.css'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Content from '../Content2/Content'

const Main = () => {
  return (
    <>
        <div className="container1 main_top">
      <a href="https://www.facebook.com/profile.php?id=100008162016789" className="main-icon1 "><i className="fa fa-facebook  "></i></a>
      <a href="https://www.instagram.com/rahulfitness2909/" className="main-icon2"><i className="fa fa-instagram wa_handels "></i></a>
      <a href="http://www.youtube.com/@Rahulfitness2909" className="main-icon3"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
        </div>
      <Navbar />

<img src="../img/background.jpg" alt="" className='main_back'/>

      <div className="container main_cont">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>


  <div class="carousel-inner ">
    <div class="carousel-item active ">
      <img src="../img/pic4.jpg" class="d-block main_img " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../img/pic5.jpg" class="d-block main_img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../img/pic6.jpg" class="d-block main_img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>

    <About/>
    <Content/>
    <Footer/>


    </>
  )
}

export default Main
