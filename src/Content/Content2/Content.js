import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <>
    <div className="container mb-2">
        <h2 className='con_h2'>Gallery</h2>
        <a href="https://www.youtube.com/watch?v=49dH7clMJVw&t=5s" className=' m-2 mb-2'><img src="../../img/pic1.jpg" alt="" className='storage con2_img' /></a>
        <a href="https://www.youtube.com/watch?v=RyakrgFfB_Y" className=' m-2 mb-2'><img src="../../img/pic2.jpg" alt="" className='storage con2_img'/></a>
        <a href="https://www.youtube.com/watch?v=masHceC2arg" className=' m-2 mb-2'><img src="../../img/pic3.jpg" alt="" className='storage con2_img'/></a>
        <a href="https://www.youtube.com/watch?v=OZRQjwET-yI" className=' m-2 mb-2'><img src="../../img/pic4.jpg" alt="" className='storage con2_img'/></a>
        <a href="https://www.youtube.com/watch?v=VSsD0QdUtr8" className=' m-2 mb-2'><img src="../../img/pic5.jpg" alt="" className='storage con2_img'/></a>
        <a href="https://www.youtube.com/watch?v=CmBwd9knmPg" className=' m-2 mb-2'><img src="../../img/pic6.jpg" alt="" className='storage con2_img'/></a>
        {/* <a href="#" className=' m-2 mb-2'><img src="../../img/pic7.jpg" alt="" className='storage con2_img'/></a> */}
    </div>
      
    </>
  )
}

export default Content
