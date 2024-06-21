import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <footer className="foot">
      <div className="foo-left">
      <img src="../img/profile.jpg " alt="" width='200px' height='200px' className='shadow bg-body-tertiary  foo-img' />
      <p className='container1'>
      Welcome to my Rahul Narayan official website . I create daily workout videos shorts and blogs on my official website "Rahul Narayan". I record and edit my daily vogging videos and blogs.
      </p>
      </div>
      <div className="foo-right">
      <div className="menu">
       
        <ul>
          <li className='mb-4 fw-bold'> Menu</li>
          <li>Home</li>
          <li>About US</li>
          <li>Advantages</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="upvc">
        
        <ul>
          <li className='mb-4 fw-bold'>Reach Out</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>You Tube</li>
        </ul>
      </div>

      
      </div>
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      <a href="https://www.facebook.com/profile.php?id=100008162016789" className="foot-icon1 "><i className="fa fa-facebook  "></i></a>
      <a href="https://www.instagram.com/rahulfitness2909/" className="foot-icon2"><i className="fa fa-instagram wa_handels "></i></a>
      <a href="http://www.youtube.com/@Rahulfitness2909" className="foot-icon3"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>

      <p className='foot_bot' >Thank you for visiting. Subscribe my youtube channel.</p>
     </footer>
      
    </>
  )
}

export default Footer
