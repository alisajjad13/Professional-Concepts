import React from 'react'
import './Carousel.css'

function Carousel() {
  return (
    <div className='carousel-container'>

        <div className='bg-img'>
          <img src='./Images/img1.webp' alt="image" />
          <div className='overlay'>
          <h1>Bring Your Music To Life</h1>
            <p>
              DJ Music, often referred to as Electronic Dance Music <br />, is a
              genre of music that is primarily created and our bring your music.
            </p>
            <button className="trending-button">Trending Song</button>
          </div>
        </div>

    </div>
    
  )
}

export default Carousel
