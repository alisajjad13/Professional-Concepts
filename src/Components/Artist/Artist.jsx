import React from 'react'
import './Artist.css' 

function Artist() {
  return (
    <div>
      
      <div className="artist">
      <button className='artistbtn'>ARTISTS</button>

      <div className="topartist">
        <h1>Top Gana Artists</h1>
      </div>
      
      </div>

      <div className="artist-images">

        <div className="artist-image1">
        <img src="./Images/imagw-18.png" alt="" />
        </div>

        <div className="artist-image2">
        <img src="./Images/image-19.png" alt="" />
        </div>

        <div className="artist-image3">
        <img src="./Images/image-20.png" alt="" />
        </div>

        <div className="artist-image4">
        <img src="./Images/image-9.png" alt="" />
        </div>

        {/* <div className="artist-image5">
        <img src="./Images/image-21.png" alt="" />
        </div> */}

      </div>
    </div>
  )
}

export default Artist
