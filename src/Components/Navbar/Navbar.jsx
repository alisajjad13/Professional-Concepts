import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>

        <div className="left">
            <h1>Pauz</h1>
            <input type="Search" placeholder='Search'/>
        </div>

        <div className="right">
            <h3>Home</h3>
            <h3>About us</h3>
            <h3>Trending Song</h3>
            <h3>Pages</h3>
            <h3>Blog</h3>
            <h3>Contact Us</h3>
            <button className='join-btn'>Join Free</button>
        </div>
    </div>
  )
}

export default Navbar
