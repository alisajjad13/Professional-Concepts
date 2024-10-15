import React from 'react';
import './Testimonials.css'; // Make sure to create the CSS file

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-header">
        <button className="testimonial-badge">TESTIMONIALS</button>
        <h2>What They Are Talking <br />About Gana</h2>
        <div className="testimonial-navigation">
        <button className="nav-button">{'<'}</button>
        <button className="nav-button">{'>'}</button>
      </div>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-avatar">
          <img src="./Images/image-10.png" alt="Avatar" />
          <div className="rating-circle">99</div>
        </div>
        <div className="testimonial-text">
          <div className="stars">★★★★★</div>
          <p>
            Meat shops typically offer a variety of meats, including beef, pork,
            chicken, lamb, and <br />sometimes specialty meats like game or exotic meats. Yes, meat shops
            often specialize <br /> in selling fresh cuts of meat, like sausages.
          </p>
          <h3>JHON SURIA</h3>
          <p className="testimonial-role">Marketing Manager</p>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
