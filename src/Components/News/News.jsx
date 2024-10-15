import React from 'react';
import './News.css'; // Import the CSS file for styling

const News = () => {
  return (
    <div className='news'>
      
<div className="news-card">
  
      <div className="news-header">
        <span className="news-user">👤 Proffesionalconcept_123</span>
        <span className="news-comments">💬 Comments (0)</span>
      </div>
      <h3 className="news-title">Grow your audience on social <br /> network with Music</h3>
      <div className="news-image-container">
        <img
          src="./Images/image-11.webp"
          alt="News"
          className="news-image"
        />
        <div className="news-date">
          <span>24</span>
          <br />
          <span>AUG</span>
        </div>
      </div>
      <div className="news-footer">
        <span className="read-more-btn">Read More</span>
        <span className="read-more-arrow">➔</span>
      </div>
    </div>

    <div className="news-card">
      <div className="news-header">
        <span className="news-user">👤 Proffesionalconcept_123</span>
        <span className="news-comments">💬 Comments (0)</span>
      </div>
      <h3 className="news-title">Hello world!</h3>
      <div className="news-image-container">
        <img
          src="./Images/image-12.webp"
          alt="News"
          className="news-image"
        />
        <div className="news-date">
          <span>24</span>
          <br />
          <span>AUG</span>
        </div>
      </div>
      <div className="news-footer">
        <span className="read-more-btn">Read More</span>
        <span className="read-more-arrow">➔</span>
      </div>
    </div>

<div className="news-card">
      <div className="news-header">
        <span className="news-user">👤 Proffesionalconcept_123</span>
        <span className="news-comments">💬 Comments (0)</span>
      </div>
      <h3 className="news-title">Trending Song audience on social <br /> network with Music</h3>
      <div className="news-image-container">
        <img
          src="./Images/image-12.webp"
          alt="News"
          className="news-image"
        />
        <div className="news-date">
          <span>24</span>
          <br />
          <span>AUG</span>
        </div>
      </div>
      <div className="news-footer">
        <span className="read-more-btn">Read More</span>
        <span className="read-more-arrow">➔</span>
      </div>
    </div>

</div>
    
  );
};

export default News;
